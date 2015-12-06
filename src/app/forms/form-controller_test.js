/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('FormCtrl', function () {
  var formCtrl,
      scope,
      mockSvc,
      form;

  beforeEach(module('myapp'));

  beforeEach(function () {
    mockSvc = {
        getFormElements: function () { return [{}]; },
        getFormElementTypes: function () { return [{}]; }
    };
    form = {
        'id': '1',
        'name': 'dummy',
        'items': []
        };
  });

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope');

    formCtrl = function () {
      return $injector.get('$controller')('FormCtrl', {
        '$scope': scope,
        'FormSvc': mockSvc,
        'form': form
      });
    };
  }));

  it('should test', function () {
    formCtrl();
  });

});
