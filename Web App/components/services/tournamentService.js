'use strict';

app.factory('tournamentService', ['$http', function($http){
	return {
		getTournaments:function(){
			return $http.post('api/v1/getTournaments.php');
		},

		getTeams:function(tid, scope){
			return $http.post('api/v1/getTournamentTeams.php', tid);
		},

		getTournamentsByOid: function(oid, scope){
			return $http.post('api/v1/getTournamentsByOid.php', oid);
		},

		insertTeam: function(team, scope){
			return $http.post('api/v1/insertTeams.php', team);
		}



	};
}]);