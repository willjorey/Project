'use strict';

angular.module('myApp.viewGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/game=:id', {
    templateUrl: 'views/games/viewGame-template.html',
    controller: 'viewGameCtrl'
  });
}])

.controller('viewGameCtrl', function($scope, $http, $route, dbService, $location, organizationService, $routeParams){
  console.log("viewGameCtrl reporting for duty!");
  $scope.greeting = "Welcome to your AngularJS SPA Template";
  var submit = false;
  dbService.getGameById($routeParams.id, $scope).then(function(game){
    $scope.game = game.data[0];
    console.log($scope.game);
    $scope.homeId = game.homeID;
    $scope.awayId = game.awayId;
  });

  $scope.refresh = function(){
    if(submit == true){
      $route.reload();
    }else{
      console.log(submit);
    }
  }
});