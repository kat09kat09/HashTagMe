angular.module('myApp') //get the myApp module

//add the homeCtrl to the myApp module
.controller('homeCtrl', ['$scope', 'Instagram','$location','$state',
  function ($scope, Instagram, $location, $state) { 
    var accessToken= $location.search().token;  //grab token off of the url

    $scope.getTag=function(tagName){
      if(accessToken){ //if logged in, then perform search
        Instagram.getTag(tagName, accessToken)
          .then(function(res){
            $scope.pics= res.data.data;
          })
      } else { //otherwise, redirect to login page
        $state.go('login'); 
      }
    }
  }
])
