/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('FormsCtrl', function () {
  var formsCtrl,
      scope,
      mockSvc;

  beforeEach(module('myapp'));

  beforeEach(function () {
    mockSvc = {
      'list': Function.prototype
    };
  });

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope');

    formsCtrl = function () {
      return $injector.get('$controller')('FormsCtrl', {
        '$scope': scope,
        'FormSvc': mockSvc
      });
    };
  }));

  it('should get a list of saved forms', function () {
    //var todo = {label: 'A new todo', isDone: false};
    formsCtrl();
    //scope.label = todo.label;
    scope.forms.should.be.empty;
    //scope.label.length.should.equal(0);
    //scope.todos.length.should.equal(1);
    //scope.todos[scope.todos.length - 1].label.should.equal(todo.label);
    //scope.todos[scope.todos.length - 1].isDone.should.equal(false);
  });

  it('should delete a form from the list', function () {});
  it('should change to edit view when click on a list item', function () {});
});
