angular
  .module('myapp.forms')
  .controller('FormCtrl', ['$scope', 'FormSvc', 'form', function ($scope, FormSvc, form) {
    'use strict';
    console.log('FormCtrl started...');

    // Initialization
    $scope.forms = [];
    FormSvc.list(function (err, results) {
    	if (err) {
    		console.error('Could not get list of forms');
    		return;
    	}
    	$scope.forms = results;
    });

    $scope.selected = {
    	form: form
    };

    $scope.$on('$destroy', function () {
    	// destroy
    });

    $scope.add = function () {};

    $scope.edit = function () {};
  }]);
