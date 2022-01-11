<?php
/**
 * craft-attendees plugin for Craft CMS 3.x
 *
 * A plugin to manage attendees
 *
 * @link      https://percipio.london
 * @copyright Copyright (c) 2021 percipiolondon
 */

namespace percipiolondon\attendees;

use craft\events\RegisterUrlRulesEvent;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;
use percipiolondon\attendees\behaviors\AttendeeBehavior;
use percipiolondon\attendees\elements\Attendee as AttendeesElement;

use Craft;
use craft\base\Plugin;
use craft\services\Elements;
use craft\events\RegisterComponentTypesEvent;
use craft\services\Plugins;

use nystudio107\pluginvite\services\VitePluginService;

use percipiolondon\attendees\models\Settings;
use percipiolondon\attendees\assetbundles\craftattendees\AttendeesAsset;
use percipiolondon\attendees\variables\AttendeesVariable;
use yii\base\Event;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://docs.craftcms.com/v3/extend/
 *
 * @author    percipiolondon
 * @package   Attendees
 * @since     1.0.0
 *
 */
class Attendees extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this plugin class so that it can be accessed via
     * Attendees::$plugin
     *
     * @var Attendees
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * To execute your plugin’s migrations, you’ll need to increase its schema version.
     *
     * @var string
     */
    public $schemaVersion = '1.0.0';

    /**
     * Set to `true` if the plugin should have a settings view in the control panel.
     *
     * @var bool
     */
    public $hasCpSettings = true;

    /**
     * Set to `true` if the plugin should have its own section (main nav item) in the control panel.
     *
     * @var bool
     */
    public $hasCpSection = true;

    // Static Methods
    // =========================================================================
    /**
     * @inheritdoc
     */

    public function __construct($id, $parent = null, array $config = [])
    {
        $config['components'] = [
            'attendees' => Attendees::class,
            'vite' => [
                'class' => VitePluginService::class,
                'assetClass' => AttendeesAsset::class,
                'useDevServer' => true,
                'devServerPublic' => 'http://localhost:3001',
                'serverPublic' => 'http://localhost:8000',
                'errorEntry' => '/src/js/attendees.ts',
                'devServerInternal' => 'http://craft-attendees-buildchain:3001',
                'checkDevServer' => true,
            ]
        ];

        parent::__construct($id, $parent, $config);
    }

    // Public Methods
    // =========================================================================

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * Craftattendees::$plugin
     *
     * Called after the plugin class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        $this->_registerCpRoutes();
        $this->_registerCraftVariables();
        $this->_registerElementTypes();

        // Register variable
        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function (Event $event) {
            /** @var CraftVariable $variable */
            $variable = $event->sender;
            $variable->set('attendees', [
                'class' => AttendeesVariable::class,
                'viteService' => $this->vite,
            ]);
        });

        Craft::info(
            Craft::t(
                'craft-attendees',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
    /**
     * Creates and returns the model used to store the plugin’s settings.
     *
     * @return \craft\base\Model|null
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * Returns the rendered settings HTML, which will be inserted into the content
     * block on the settings page.
     *
     * @return string The rendered settings HTML
     */
    protected function settingsHtml(): string
    {
        return Craft::$app->view->renderTemplate(
            'craft-attendees/settings',
            [
                'settings' => $this->getSettings()
            ]
        );
    }


    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getCpNavItem(): array
    {
        $nav = parent::getCpNavItem();

        $nav['label'] = $this->getPluginName();

//        $nav['subnav']['dashboard'] = [
//            'label' => Craft::t('craft-attendees', 'Dashboard'),
//            'url' => 'craft-attendees/dashboard'
//        ];
//
//        $nav['subnav']['data-export'] = [
//            'label' => Craft::t('craft-attendees', 'Data Export'),
//            'url' => 'craft-attendees/data-export'
//        ];

        $nav['subnav']['trainings'] = [
            'label' => Craft::t('craft-attendees', 'Trainings'),
            'url' => 'craft-attendees/trainings'
        ];


        return $nav;
    }

    public function getPluginName()
    {
        return Craft::t('craft-attendees', $this->getSettings()->pluginName);
    }



    // Private Methods
    // =========================================================================

    private function _registerCpRoutes()
    {
        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_CP_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['craft-attendees/trainings/<eventId:\d+>'] = 'craft-attendees/training/detail';
                $event->rules['craft-attendees/trainings/attendees/<eventId:\d+>/<limit:\d+>/<offset:\d+>'] = 'craft-attendees/training/attendees';
            }
        );
    }

    private function _registerCraftVariables()
    {
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                $variable = $event->sender;

                $variable->attachBehaviors([
                    AttendeeBehavior::class,
                ]);
            }
        );
    }

    private function _registerElementTypes()
    {
        Event::on(
            Elements::class,
            Elements::EVENT_REGISTER_ELEMENT_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = AttendeesElement::class;
            }
        );
    }

}
