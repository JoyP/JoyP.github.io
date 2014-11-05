(function(){
  'use strict';

  angular.module('portfolio')
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Joy Pratt';

    $scope.home = true;
    $scope.about = false;
    $scope.skills = false;
    $scope.projects = false;

    $scope.showHome = function(){
      $scope.home = true;
      $scope.about = false;
      $scope.skills = false;
      $scope.projects = false;
    };

    $scope.showAbout = function(){
      $scope.home = false;
      $scope.about = true;
      $scope.skills = false;
      $scope.projects = false;
    };

    $scope.showSkills = function(){
      $scope.home = false;
      $scope.about = false;
      $scope.skills = true;
      $scope.projects = false;
    };

    $scope.showProjects = function(){
      $scope.home = false;
      $scope.about = false;
      $scope.skills = false;
      $scope.projects = true;
    };

  }]);
})();
