
angular.module('myapp', [
  'ngRoute',
  'myapp.forms'
])
.config(function ($routeProvider) {
  'use strict';
  console.log('TEST');
  $routeProvider
    .when('/forms', {
      controller: 'FormCtrl',
      templateUrl: '/forms/forms.html'
    })
    .when('/forms/:id', {
      controller: 'FormCtrl',
      templateUrl: '/forms/form.html',
      resolve: {
        form: function (FormSvc) {
          return FormSvc.edit('1');
        }
      }
    })
    .otherwise({
      redirectTo: '/forms'
    });
});
