'use strict';

angular.module('myApp.viewTournament', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/tournament=:id', {
    templateUrl: 'views/tournaments/viewTournament-template.html',
    controller: 'viewTournamentCtrl'
  });
}])

.controller('viewTournamentCtrl', function($scope, $http,$q, dbService, organizationService, tournamentService, $routeParams){
  console.log("viewTournamentCtrl reporting for duty!");
  $scope.greeting = "Tournament";

  tournamentService.getTournamentTeams($routeParams.id, $scope).then(function(data){
    $scope.teams = data.data;
    console.log(data.data);
  });
});