(function(){
  'use strict';

  angular.module('portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'index.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
