//inject the myApp.factory module into the myApp module
angular.module('myApp', ['ui.router', 'myApp.factory']) 

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function ($stateProvider, $urlRouterProvider, $httpProvider){

    //default route is /home 
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'app/views/home.html',
        controller: 'homeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'loginCtrl'
      })
  }
])
