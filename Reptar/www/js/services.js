angular.module('starter.services', [])


.factory("dbService", function($http, Backand){
  var baseUrl = "/1/objects/";
  function getUrl(name){
    return Backand.getApiUrl() + baseUrl + name;
  }
  return {

    getOrganizations: function(){
      return $http.get(getUrl("organization"));
    },

    getTournamentsByOid: function(oid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getTournamentsByOid',
        params: {
          parameters: {
            oid: oid
          }
        }
      });
    },

    getTournaments: function() {

      return $http.get(getUrl("tournament"));
    },

    getGames: function(){
      return $http.get(getUrl("game"));
    },

    getPlayers: function(){
      return $http.get(getUrl("player"));
    },

    getTournamentParticipants: function(tid){
      console.log(tid);
      return $http ({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/query/data/getTournamentTeams',
          params: {
            parameters: {
              tid: tid
            }
          }
        });
    },

    getAllTeams: function(){
      return $http.get("https://api.backand.com/1/query/data/getAllTeams");
    },

    getTeamPlayers: function(tid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getTeamPlayers',
        params: {
          parameters: {
            tid: tid
          }
        }
      });
    },

    getGameById: function(gid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getGameById',
        params: {
          parameters: {
            gid: gid
          }
        }
      });
    },

    getTeamNameById: function(tid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getTeamNameById',
        params: {
          parameters: {
            teamId: tid
          }
        }
      });
    }
  }

})

.factory("Teams", function(){
  return {
    //Get Team by ID
    getById: function(data, tid) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(tid)) {
          return data[i];
        }
      }
      return null;
    },
    //Get Team Average Stats. Returns a list of player stat objects, given the team id and a list of player id's list.
    getTeamAvgStats: function(tid, idList){
      return null;
    }
  };
})

.factory("Games", function($http, Backand){
  return {
    //Grab all player stats for a single game, with game id gid
    getPlayerStats: function(gid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getPlayerStatsByGid',
        params: {
          parameters: {
            gid: gid
          }
        } 
      });
     },

    getTeamId: function(gid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getGameTeamId',
        params: {
          parameters: {
            gid: gid
          }
        }
      });
    },
    getTeamStats: function(gid, tid){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getGameTeamStats',
        params: {
          parameters: {
            gid: gid,
            teamId: tid
          }
        }
      });
    }
  };
})

.factory("Players", function($http,Backand){
  return {
    getById: function(tid) {
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/getPlayerStats',
        params: {
          parameters: {
            pid: tid
          }
        }
      });
    },
    getPlayerStatAvg: function(id){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/playerStatAverage',
        params: {
          parameters: {
            pid: id
          }
        }
      });
    }
  };
})

.factory("Tournaments", function(){
  return {
    getById: function(data, tid) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(tid)) {
          return data[i];
        }
      }
      return null;
    },

    getGamesByTid: function(data, tid){
      var list = [];
      var j = 0;
      for (var i = 0; i < data.length; i++, j++) {
        if (parseInt(data[i].tid) === parseInt(tid)) {
            list[j] = data[i];
        }
      }
      console.log(list);
      return list;
    }
  };
})

;
