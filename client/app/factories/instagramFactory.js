angular.module('myApp.factory', []) //create a new module called myApp.factory

//attach the Instagram module to myApp
.factory('Instagram', ['$http', '$q', 
  function ($http, $q){
    // var deferred= $q.defer();

    var getTag= function (searchTerm, accessToken) {
      return $http.jsonp('https://api.instagram.com/v1/tags/'+ searchTerm+ '/media/recent?access_token='+ accessToken +'&callback=JSON_CALLBACK')
        .success(function(result){
          // deferred.resolve(result); 
          $q.resolve(result); 
        }).error(function (result){
          // deferred.reject(result);
          $q.reject(result); 
        })
    }

    return {
      getTag: getTag
    }
  }
])