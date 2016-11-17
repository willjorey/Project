'use strict';

angular.module('myApp.displayOrganizations', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/organizations/displayOrganizations-template.html',
    controller: 'displayOrgsCtrl'
  });
}])

.controller('displayOrgsCtrl', function($scope, $http, $location, organizationService){
  console.log("CreateOrgCtrl reporting for duty!");
  $scope.greeting = "Welcome to your AngularJS SPA Template";

  organizationService.getOrganizations().then(function(data){
    $scope.organizations = data.data;
    console.log(data);
  });

  //FUNCTIONS

  $scope.createOrganization = function(){
    $location.path("/organization");
  }
});