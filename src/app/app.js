
angular.module('myapp', [
  'ngRoute',
  'myapp.forms'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/forms', {
      controller: 'FormCtrl',
      templateUrl: '/forms/form.html'
    })
    .otherwise({
      redirectTo: '/forms'
    });
});
