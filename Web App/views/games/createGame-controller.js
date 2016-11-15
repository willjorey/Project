'use strict';

angular.module('myApp.game', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game/tournament=:tid', {
    templateUrl: 'views/games/createGame-template.html',
    controller: 'createGameCtrl'
  });
}])

.controller('createGameCtrl', function($scope, $q, $http, dbService, tournamentService, $routeParams){
	$scope.id = $routeParams.tid;
  	$scope.greeting = "Create a Game";


  	//Get Team ID's
  	tournamentService.getTeams($scope.id, $scope).then(function(data){
	  	$scope.teams = [];
	  	$scope.promise = [];
  		$scope.teamID = data.data;
	  	console.log($scope.teamID);

  	//Get Team Objects
  		for(var i = 0; i < $scope.teamID.length; i++){
  			$scope.teams[i] =  dbService.getTeamById($scope.teamID[i].teamId, $scope).then(function(result){
  				return result.data[0];
  			});


  		}
  		$q.all($scope.teams).then(function(result){
  			$scope.teams = result;
  			console.log($scope.teams);
  		});
  	});

  	$scope.insertGame = function(game){
  		game.id = $scope.id;
  		dbService.insertGame(game, $scope).then(function(data){
  			console.log(data.data);
  		});
  	}


});