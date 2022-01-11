<?php

namespace percipiolondon\attendees\controllers;

use craft\elements\Entry;
use craft\feeds\GuzzleClient;
use craft\web\Controller;

use Craft;
use percipiolondon\attendees\Attendees;
use percipiolondon\attendees\elements\Attendee;
use percipiolondon\attendees\records\Attendee as AttendeeRecord;
use percipiolondon\attendees\helpers\Attendee as AttendeeHelper;
use yii\web\HttpException;

class TrainingController extends Controller
{
    protected $allowAnonymous = ['save', 'delete'];

//    public function actionIndex()
//    {
//        return $this->renderTemplate('craft-attendees/dashboard/index', []);
//    }

    public function actionDetail(int $eventId, string $site = '*')
    {
        $event = \craft\elements\Entry::find()
            ->id($eventId)
            ->site($site)
            ->anyStatus()
            ->one();

        return $this->renderTemplate('craft-attendees/trainings/detail', [
            'event' => $event
        ]);
    }

    public function actionAttendees(int $eventId, int $limit = 0, int $offset = 0)
    {
        $limit = $limit === 0 ? "*" : $limit;

        $attendees = Attendee::find()
            ->where(['eventId' => $eventId])
            ->orderBy('dateCreated DESC')
            ->offset($offset)
            ->limit($limit)
            ->all();

        $count = Attendee::find()
            ->where(['eventId' => $eventId])
            ->count();

        return $this->asJson([
            "meta" => [
                "event" => $eventId,
                "offset" => $offset,
                "limit" => $limit,
                "total" => $count
            ],
            "attendees" => $attendees
        ]);
    }

    public function actionSave()
    {
        $this->requireLogin();
        $this->requireAcceptsJson();
        $request = Craft::$app->getRequest();
        $attendee = AttendeeHelper::populateAttendeeFromPost($request);

        $success = Craft::$app->getElements()->saveElement($attendee);
        $savedAttendee = Attendee::find()
            ->where(['eventId' => $attendee->eventId, 'name' => $attendee->name, 'orgName' => $attendee->orgName, 'email' => $attendee->email])
            ->one();

        $response = (object)[
            "success" => $success,
            "errors" => $attendee->getErrors(),
            "attendee" => $savedAttendee
        ];

        return $this->asJson($response);
    }

    public function actionDelete()
    {
        $this->requireLogin();
        $this->requireAcceptsJson();

        $attendeeId = Craft::$app->getRequest()->getRequiredBodyParam('attendeeId');
        $attendee = Attendee::find()->id($attendeeId)->one();

        if(!$attendee){
            throw new HttpException(404, Craft::t('craft-attendees', 'Can not find attendee.'));
        }

        if (!Craft::$app->getElements()->deleteElementById($attendee->id)) {
            return $this->asJson(['success' => false]);
        }

        return $this->asJson(['success' => true, 'attendee' => $attendee]);
    }
}
