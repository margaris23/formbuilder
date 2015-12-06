/* globals console */
angular
  .module('myapp.forms')
  .controller('FormsCtrl', ['$scope', 'FormSvc', function ($scope, FormSvc) {
    'use strict';
    console.log('FormsCtrl started...');

    // Initialization
    $scope.forms = [];
    FormSvc.list(function (err, results) {
    	if (err) {
    	    console.error('Could not get list of forms');
    	    return;
    	}
    	$scope.forms = results;
    });

    $scope.$on('$destroy', function () {
    	// destroy
    });

    $scope.add = function () {};

    $scope.edit = function () {};
  }]);
