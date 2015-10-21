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

//jQuery
var main = function() {
  // activate the bootstrap tab
  $('#tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  $('#toggle_advanced').click(function (e) {
    e.preventDefault()
  });
  $('#tab_post').on("hide.bs.collapse", function(){
    $("#toggle_advanced").html('<span class="glyphicon glyphicon-collapse-down"></span> Show advanced options');
  });
  $('#tab_post').on("show.bs.collapse", function(){
    $("#toggle_advanced").html('<span class="glyphicon glyphicon-collapse-up"></span> Hide advanced options');
  });
}

$(document).ready(main);
