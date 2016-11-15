'use strict';

app.factory('sportService', ['$http', function($http){
	return {

		getSports:function(){
			return $http.post('api/v1/getSports.php');
		}

	};

}]);