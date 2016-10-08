'use strict';

/**
 * @ngdoc function
 * @name lastPassRootScopeIssueApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lastPassRootScopeIssueApp
 */
angular.module('lastPassRootScopeIssueApp')
  .controller('AboutCtrl', function ($rootScope) {
        $rootScope.background = 'background: url(../images/bear.jpg) no-repeat center/cover fixed;';
  });
