/*global angular */
/*jshint unused:false */
'use strict';

/**
* The main TodoMVC app module
* ngSanitize added
*
* @type {angular.Module}
*/
var todomvc = angular.module('todomvc', ['firebase', 'ngStorage', 'ngSanitize']);
