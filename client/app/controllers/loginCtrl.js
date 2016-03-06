angular.module('myApp') //get the myApp module

//add the loginCtrl to the myApp module
.controller('loginCtrl', ['$scope', 
  function($scope){
    $scope.authenticate= function (){
      //step 1: Direct your user to our authorization URL
      var clientId= 'a6963f5935dc41e7ba6ca19d5b486540'; 
      var redirectUri= 'http://localhost:3000/api/auth'; 
      window.location.href='https://api.instagram.com/oauth/authorize/?client_id='+ clientId+ '&redirect_uri=' + redirectUri + '&response_type=code'+ '&scope=public_content'; 
    }
  }
])
