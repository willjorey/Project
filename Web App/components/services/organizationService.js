'use strict';

app.factory('organizationService', ['$http', function($http){
	return {
		getOrganizations:function(){
			return $http.post('api/v1/getOrganizations.php');
		}


	};
}]);