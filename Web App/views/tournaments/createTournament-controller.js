'use strict';

angular.module('myApp.tournament', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tournament', {
    templateUrl: 'views/tournaments/createTournament-template.html',
    controller: 'createTournamentCtrl'
  });
}])

.controller('createTournamentCtrl', function($scope, $http, dbService, organizationService, tournamentService, $location){
  console.log("createTournamentCtrl reporting for duty!");
  $scope.greeting = "Create a Touranment";

  $scope.age = ["U12","U13", "U14", "U15", "U16", "U17", "U18", "U19"];

	organizationService.getOrganizations().success(function(data){
  	$scope.organizations = data;
  });

  $scope.insertTournament = function(tournament){
    dbService.insertTournament(tournament, $scope).then(function(data){
        $scope.tid = data.data;
    });

    tournamentService.getTournamentsByOid(tournament.oid).then(function(data){
      $scope.tournaments = data.data;
      console.log(data.data);
    });

    console.log("Query Processed"); 
  };

  $scope.createGames = function(tid){
    var $id = tid;
    if ($id == null){
      console.log("submit query first");
    }else{
      $location.path("/game/tournament=" + $id);
    }
  }

});