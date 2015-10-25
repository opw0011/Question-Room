/*global angular */
/*jshint unused:false */
'use strict';

/**
* The main TodoMVC app module
* ngSanitize added
*
* @type {angular.Module}
*/
var todomvc = angular.module('todomvc', ['firebase', 'ngStorage', 'ngSanitize', 'ezfb', 'ui.bootstrap', 'angular-smilies'])

.config(function (ezfbProvider) {
  ezfbProvider.setInitParams({
    appId: '1074795829199506',
    version: 'v2.5'
  });
});
