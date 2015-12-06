/* globals console */
angular
.module('myapp.forms')
.controller('FormCtrl', ['$scope', 'FormSvc', 'form', function ($scope, FormSvc, form) {
    'use strict';
    console.log('FormCtrl started...');

    // Internal
    var STATUS = {
        ACTIVE: 'active',
        INACTIVE: 'inactive'
    };

    function decorate(obj) {
        if (obj.isExtended) {
            return obj;
        }
        var extObj = Object.create(obj);
        extObj.isExtended = true;
        extObj.items.forEach(function(item) {
            item.active = true;
        });
        return extObj;
    }

    // Initialization
    $scope.formElements = FormSvc.getFormElements();
    $scope.formElementTypes = FormSvc.getFormElementTypes();

    // selector object used for adding items in form
    $scope.selector = {
        element: $scope.formElements[0],
        value: '',
        type: $scope.formElementTypes[0]
    };

    // Form template
    $scope.form = !form ? {} : decorate(form);

    // Listeners
    $scope.$on('$destroy', function () {
    	// destroy
    });

    // Public i/f
    $scope.add = function () {
        $scope.form.items.push($scope.selector);
    };

    $scope.toggle = function (item) {
        item.active = !item.active;
    };

    $scope.save= function () {
        FormSvc.save({
            name: $scope.form.name,
            id: $scope.form.id,
            items: $scope.form.items.map(function (item) {
                return {
                    element: item.element,
                    value: item.value,
                    type: item.type
                };
            })
        },
        function(error) {
            error && console.log('Error: ' + error);
        });
                   
    };

  }]);
