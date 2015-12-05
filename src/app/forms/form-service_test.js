/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('FormSvc', function () {
  var formSvc;

  beforeEach(module('myapp'));

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope');

    formSvc = function () {
      return $injector.get('FormSvc');
    };
  }));

  it('should get a list of saved forms', function () {
    formSvc();
  });

  it('should delete a form from the list', function () {});
  it('should change to edit view when click on a list item', function () {});
});
