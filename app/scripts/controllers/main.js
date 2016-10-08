'use strict';

/**
 * @ngdoc function
 * @name lastPassRootScopeIssueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastPassRootScopeIssueApp
 */
angular.module('lastPassRootScopeIssueApp')
  .controller('MainCtrl', function ($rootScope) {
        $rootScope.background = 'background: url(../images/pigeon.png) no-repeat center/cover fixed;';
  });
