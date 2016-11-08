// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'backand'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, BackandProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.players', {
    url:'/players',
    views:{
      'tab-players':{
        templateUrl: 'templates/tab-players.html',
        controller: 'PlayersCtrl'
      }
    }
  })

    .state('tab.games',{
    url:'/games',
    views: {
      'tab-games':{
        controller: 'GamesCtrl'
      }
    }
  })

  .state('tab.game-detail',{
    url:'/games/game=:gid',
    views: {
      'tab-games':{
        templateUrl: 'templates/tab-game-detail.html',
        controller: 'GameDetailCtrl'
      }
    }
  })

  .state('tab.players-detail',{
    url:'/players/player=:pid',
    views:{
      'tab-players':{
        templateUrl: 'templates/tab-player-detail.html',
        controller: 'PlayerDetailCtrl'
      }
    }
  })

  .state('tab.teams', {
    url: '/teams',
    views: {
      'tab-teams': {
        templateUrl: 'templates/tab-teams.html',
        controller: 'TeamsCtrl'
      }
    }
  })

  .state('tab.team-detail', {
    url: '/teams/team=:tid',
    views: {
      'tab-teams': {
        templateUrl: 'templates/team-detail.html',
        controller: 'TeamDetailCtrl'
      }
    }
  })

  .state('tab.organizations', {
      url: '/organizations',
      views: {
        'tab-organizations': {
          templateUrl: 'templates/tab-organizations.html',
          controller: 'OrganizationsCtrl'
        }
      }
  })

  .state('tab.organizations-detail', {
      url: '/organizations/org=:oid',
      views: {
        'tab-organizations': {
          templateUrl: 'templates/tab-tournaments.html',
          controller: 'TournamentsCtrl'
        }
      }
  })

  // .state('tab.tournaments', {
  //     url: '/tournaments',
  //     views: {
  //       'tab-tournaments': {
  //         templateUrl: 'templates/tab-tournaments.html',
  //         controller: 'TournamentsCtrl'
  //       }
  //     }
  // })

  .state('tab.tournament-detail', {
    url: '/tournament=:tid',
    views: {
      'tab-tournaments': {
        templateUrl: 'templates/tournament-detail.html',
        controller: 'TournamentDetailCtrl'
      }
    }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }

  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  BackandProvider.setAppName('reptar');
  BackandProvider.setSignUpToken('ac0c68cf-3294-4377-803b-95f635c9ac31');
  BackandProvider.setAnonymousToken('0d57a449-88ed-4d4f-a3f7-947ec3bb4bfc');

});
