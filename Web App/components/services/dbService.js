'use strict';

app.factory('dbService', ['$http', function($http){
	return {

		insertOrganization:function(data, scope){
			$http.post('api/v1/insertOrganization.php', data);
		},

		insertTournament: function(data, scope){
			return $http.post('api/v1/insertTournament.php', data);
		},

		insertGame: function(data, scope){
			return $http.post('api/v1/insertGame.php', data);
		},

		getTeamById: function(id, scope){
			return $http.post('api/v1/getTeamById.php', id);
		}

	};

}]);