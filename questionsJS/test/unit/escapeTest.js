/*global todomvc */
'use strict';

describe('todoEscape directive', function () {
  var scope, compile, element;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  beforeEach(function() {
    var elem = angular.element('<input todo-escape="escapeCallback">');
    element = compile(elem)(scope);
    scope.$digest();

    var triggerKeyDown = function(element, keyCode) {
      var e = $.Event('keydown');
      e.which = keyCode;
      element.trigger(e);
    };
  });

  it('should call callback function on escape', function() {

    element.triggerHandler('keydown');
    scope.$digest();

    expect(scope.escape).toHaveBeenCalled();
  });

  it('should unbind keydown event when scope is destroyed', function() {
    spyOn(element, 'unbind');
    scope.$destroy();

    expect(element.unbind).toHaveBeenCalledWith('keydown');
  });
});
