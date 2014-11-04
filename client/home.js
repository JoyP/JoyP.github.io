(function(){
  'use strict';

  angular.module('portfolio')
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Joy Pratt';

    $scope.home = true;
    $scope.about = false;
    $scope.skills = false;
    $scope.projects = false;

    $scope.home = function(){
      $scope.home = true;
      $scope.about = false;
      $scope.skills = false;
      $scope.projects = false;
    };

    $scope.about = function(){
      $scope.home = false;
      $scope.about = true;
      $scope.skills = false;
      $scope.projects = false;
    };

    $scope.skills = function(){
      $scope.home = false;
      $scope.about = false;
      $scope.skills = true;
      $scope.projects = false;
    };

    $scope.projects = function(){
      $scope.home = false;
      $scope.about = false;
      $scope.skills = false;
      $scope.projects = true;
    };

  }]);
})();
