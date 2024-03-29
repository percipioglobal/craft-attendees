<?php

namespace percipiolondon\attendees\helpers;

use craft\helpers\StringHelper;
use percipiolondon\attendees\Attendees;
use yii\web\NotFoundHttpException;
use yii\web\Request;
use Craft;

use percipiolondon\attendees\records\Attendee as AttendeeModel;

class Attendee
{
    public static function populateAttendeeFromPost( Request $request = null): AttendeeModel
    {
        if (!$request) {
            $request = Craft::$app->getRequest();
        }

        $attendeeId = $request->getBodyParam('attendeeId');

        if(!$attendeeId){
            $attendee = new AttendeeModel();
        }else{
            $attendee = AttendeeModel::findOne(['id' =>$attendeeId ]);

            if (!$attendee) {
                throw new NotFoundHttpException(Craft::t('craft-attendees', 'No attendee with the ID “{id}”', ['id' => $attendeeId]));
            }
        }

        $attendee->orgName = $request->getBodyParam('orgName');
        $attendee->orgUrn = $request->getBodyParam('orgUrn');
        $attendee->postCode = $request->getBodyParam('postCode');
        $attendee->name = $request->getBodyParam('name');
        $attendee->email = $request->getBodyParam('email');
        $attendee->jobRole = $request->getBodyParam('jobRole') ?? 'na';
        $attendee->days = $request->getBodyParam('days') ?? 1;
        $attendee->newsletter = $request->getBodyParam('newsletter') ?? 0;
        $attendee->approved = $request->getBodyParam('approved') ?? 0;
        $attendee->anonymous = $request->getBodyParam('anonymous') ?? 0;
        $attendee->priority = $request->getBodyParam('priority') ?? 0;
        $attendee->eventId = $request->getBodyParam('event');
        $attendee->siteId = $request->getBodyParam('siteId');

        return $attendee;
    }

    public static function populateAttendeeFromArray(array $entry, string $identifier): AttendeeModel
    {
        $attendee = new AttendeeModel();
        $csvOrgUrn = is_numeric($entry['orgUrn'] ?? null) ? (int)$entry['orgUrn'] : null;

        if($csvOrgUrn){
            $result = Attendees::getInstance()->metaseed->school($csvOrgUrn);

            if($result->suggestions[0]->data ?? null){
                $attendee->orgName = $result->suggestions[0]->value ?? $entry['orgName'] ?? '';
                $attendee->postCode = $result->suggestions[0]->data->postcode ?? $entry['postCode'] ?? '';
                $attendee->priority = $result->suggestions[0]->data->priority ?? $entry['priority'] ?? 0;
                $attendee->approved = 1;
            } else {
                $attendee->orgName = $entry['orgName'] ?? '';
                $attendee->postCode = $entry['postCode'] ?? '';
                $attendee->priority = $entry['priority'] ?? 0;
                $attendee->approved = 0;
            }
        } else {
            $attendee->orgName = $entry['orgName'] ?? '';
            $attendee->postCode = $entry['postCode'] ?? '';
            $attendee->priority = $entry['priority'] ?? 0;
            $attendee->approved = 0;
        }

        $attendee->orgUrn = $entry['orgUrn'] ?? '';
        $attendee->name = utf8_encode(preg_replace('/[^(\x20-\x7F)]*/','', $entry['name'] ?? ''));
        $attendee->email = utf8_encode(preg_replace('/[^(\x20-\x7F)]*/','', $entry['email'] ?? ''));
        $attendee->jobRole = utf8_encode(preg_replace('/[^(\x20-\x7F)]*/','', $entry['jobRole'] ?? 'na'));
        $attendee->days = utf8_encode(preg_replace('/[^(\x20-\x7F)]*/','', $entry['days'] ?? 1));
        $attendee->newsletter = str_contains($entry['newsletter'] ?? 'n', 'y');
        $attendee->eventId = $entry['event'] ?? '';
        $attendee->siteId = $entry['site'] ?? '';
        $attendee->anonymous = is_null($entry['name'] ?? null) ? 1 : 0;
        $attendee->identifier = $identifier ?? '';

        return $attendee;
    }
}
