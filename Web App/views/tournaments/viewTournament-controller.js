'use strict';

angular.module('myApp.viewTournament', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/tournament=:id', {
    templateUrl: 'views/tournaments/viewTournament-template.html',
    controller: 'viewTournamentCtrl'
  });
}])

.controller('viewTournamentCtrl', function($scope, $http, dbService, organizationService, tournamentService, $location){
  console.log("viewTournamentCtrl reporting for duty!");
  $scope.greeting = "Tournament";

});