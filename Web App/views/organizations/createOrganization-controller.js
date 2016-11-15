'use strict';

angular.module('myApp.organization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/organization', {
    templateUrl: 'views/organizations/createOrganization.html',
    controller: 'CreateOrgCtrl'
  });
}])

.controller('CreateOrgCtrl', function($scope, $http, dbService, organizationService, sportService){
  console.log("CreateOrgCtrl reporting for duty!");
  $scope.greeting = "Welcome to your AngularJS SPA Template";

  organizationService.getOrganizations().success(function(data){
    $scope.table = data;
    });

  sportService.getSports().success(function(data){
    $scope.sports = data;
	  });

  $scope.insertOrganization = function(org){
    dbService.insertOrganization(org, $scope);
    console.log("Query Processed");
  };

});