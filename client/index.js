(function(){
  'use strict';

  angular.module('portfolio', [])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'index.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
