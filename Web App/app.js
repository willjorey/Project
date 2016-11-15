'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
  'myApp.organization',
  'myApp.tournament',
  'myApp.game',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/organization'});
}]);