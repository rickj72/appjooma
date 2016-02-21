/**
 * @package       Joomla.Apps
 * @subpackage    com_apps
 * 
 * @author        Anibal Horacio Sanchez Perez @anibal_sanchez
 * 
 * @copyright     Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @link          http://extensions.joomla.org
 */

/* globals angular,cordova */

"use strict";
angular.module('starter', ['ionic', 'jgSimpleApi'])

.run(
        function($ionicPlatform) {
          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the
            // accessory bar above the keyboard
            // for form inputs)
            if ((window.cordova) && (window.cordova.plugins)
                    && (window.cordova.plugins.Keyboard)) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleDefault();
            }
          });
        });
