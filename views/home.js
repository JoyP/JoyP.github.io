(function(){
  'use strict';

  angular.module('portfolio')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    Home.getMessage().then(function(response){
      $scope.title = 'Joy Pratt';
    });
  }]);
})();
