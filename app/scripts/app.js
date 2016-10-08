'use strict';

/**
 * @ngdoc overview
 * @name lastPassRootScopeIssueApp
 * @description
 * # lastPassRootScopeIssueApp
 *
 * Main module of the application.
 */
angular
  .module('lastPassRootScopeIssueApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
