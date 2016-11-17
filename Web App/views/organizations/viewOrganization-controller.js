'use strict';

angular.module('myApp.viewOrganization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/organization=:id', {
    templateUrl: 'views/organizations/viewOrganization-template.html',
    controller: 'viewOrgCtrl'
  });
}])

.controller('viewOrgCtrl', function($scope, $http, $routeParams, $location, tournamentService){
  console.log("viewOrgCtrl reporting for duty!");
  $scope.greeting = "Welcome to your AngularJS SPA Template";

  tournamentService.getTournamentsByOid($routeParams.id, $scope).then(function(data){
    $scope.tournaments = data.data;
    console.log($scope.tournaments);
  })

  // FUNCTIONS
  $scope.createTournaments = function(){
    $location.path("/tournament");
  };
});