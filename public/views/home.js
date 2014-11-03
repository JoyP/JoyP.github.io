(function(){
  'use strict';

  angular.module('portfolio')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.title = 'Joy Pratt';
  }]);
})();
