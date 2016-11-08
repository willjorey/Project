angular.module('starter.controllers', [])

// .controller('DashCtrl', function($scope, dbService, $state, Tournaments) {
//   // $scope.tournaments = [
//   //   {"name": "SBA"},
//   //   {"name": "MUMBA"},
//   // ]

  // $scope.test = function(){
  //   console.log("test call");
  // }

//   $scope.test = function(item){
//     $state.go('tab.tournament-detail', {tid: item.id});
//   }

//   // $scope.message = "hello its me";

// })

.controller('OrganizationsCtrl', function($scope, dbService) {
  dbService.getOrganizations().then(function(result){
    $scope.organizations = result.data.data;
  })
})

.controller('TournamentsCtrl', function($scope, $stateParams, Tournaments, dbService) {
   dbService.getTournamentsByOid($stateParams.oid).then(function(result){
    $scope.tournaments = result.data;
  });
})

.controller('TeamsCtrl', function($scope, dbService) {

  dbService.getAllTeams().then(function(result){
    $scope.teams = result.data;
  });
})

.controller('PlayersCtrl', function($scope, dbService) {

    $scope.players = [];
    dbService.getPlayers().then(function(result){
    $scope.players = result.data.data;
  }); 

})

.controller('GamesCtrl', function($scope, dbService) {
})

.controller('TeamDetailCtrl', function($q, $scope, $stateParams, Teams, Players, dbService) {

//Get Specific Team
  dbService.getAllTeams().then(function(result){
    $scope.team = Teams.getById(result.data, $stateParams.tid);
  });

//Get the Teams players
  dbService.getTeamPlayers($stateParams.tid).then(function(result){
    $scope.players = result.data;
    $scope.promise = [];
    $scope.list = [];
    console.log($scope.players);

    //Get all player Stat average in the team
    for( var i = 0; i < $scope.players.length; i++){
      //push the promises into an array
      $scope.list[i] = Players.getPlayerStatAvg($scope.players[i].id).then(function(result){
        return result.data[0];
      });
    }
    //resolve all the promises
    $q.all($scope.list).then(function(result){
      $scope.list = result;
      console.log($scope.list);
    })

  });


})

.controller('TournamentDetailCtrl', function($scope, $stateParams, Tournaments, dbService) {
  var show = false;

  dbService.getTournaments().then(function(result){
    $scope.tourny = [];
    $scope.tourny = Tournaments.getById(result.data.data, $stateParams.tid);
  });

  dbService.getGames().then(function(result){
    $scope.games = [];
    $scope.games = Tournaments.getGamesByTid(result.data.data, $stateParams.tid);
  });

  dbService.getTournamentParticipants($stateParams.tid).then(function(result){
    $scope.participants = [];
    $scope.participants = result.data;
    console.log($scope.participants);
  });

})

.controller('PlayerDetailCtrl', function($scope, $stateParams, Players, dbService) {
  Players.getById($stateParams.pid).then(function(result){
    $scope.player = result.data[0]; 
    console.log($scope.player);
  });

  Players.getPlayerStatAvg($stateParams.pid).then(function(result){
    $scope.stat = result.data[0];
    console.log($scope.stat);
  });
  
})

.controller('GameDetailCtrl', function($scope, $stateParams,Games, dbService) {
  dbService.getGameById($stateParams.gid).then(function(result){
    $scope.game = result.data[0];
    $scope.homeId = result.data[0].homeId;
    $scope.awayId = result.data[0].awayId;
   
    Games.getTeamStats($stateParams.gid, $scope.homeId).then(function(result){
      $scope.home = result.data;
      $scope.hTotAsts = 0;
      $scope.hTotRebs = 0;
      $scope.hTotOrebs = 0;
      $scope.hTotDrebs = 0;
      $scope.hTotSteals = 0;
      $scope.hTotBlocks = 0;
      $scope.hTotTurnovers = 0;
      $scope.hTotFouls = 0;

      for (var i = 0; i < $scope.home.length; i++) {
        $scope.hTotAsts += parseInt($scope.home[i].AST); 
        $scope.hTotRebs += parseInt($scope.home[i].REB);
        $scope.hTotOrebs += parseInt($scope.home[i].OREB);
        $scope.hTotDrebs += parseInt($scope.home[i].DREB);
        $scope.hTotSteals += parseInt($scope.home[i].STL);
        $scope.hTotBlocks += parseInt($scope.home[i].BLK);
        $scope.hTotTurnovers += parseInt($scope.home[i].TOV);
        $scope.hTotFouls += parseInt($scope.home[i].PF);
      }
    })

    Games.getTeamStats($stateParams.gid, $scope.awayId).then(function(result){
      $scope.away = result.data;
      $scope.aTotAsts = 0;
      $scope.aTotRebs = 0;
      $scope.aTotOrebs = 0;
      $scope.aTotDrebs = 0;
      $scope.aTotSteals = 0;
      $scope.aTotBlocks = 0;
      $scope.aTotTurnovers = 0;
      $scope.aTotFouls = 0;
      for (var i = 0; i < $scope.away.length; i++) {
        $scope.aTotAsts += parseInt($scope.away[i].AST);
        $scope.aTotRebs += parseInt($scope.away[i].REB);
        $scope.aTotOrebs += parseInt($scope.away[i].OREB);
        $scope.aTotDrebs += parseInt($scope.away[i].DREB);
        $scope.aTotSteals += parseInt($scope.away[i].STL);
        $scope.aTotBlocks += parseInt($scope.away[i].BLK);
        $scope.aTotTurnovers += parseInt($scope.away[i].TOV);
        $scope.aTotFouls += parseInt($scope.away[i].PF); 
      }
    })

  })

})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
