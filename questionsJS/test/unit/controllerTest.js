'use strict';

describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    //    var sorted = sortUsers(users);
    //    expect(sorted).toEqual(['jeff', 'jack', 'igor']);
  });
});

describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));
  // variables for injection
  var controller;
  var scope;
  var location;
  var firebaseArray;
  var sce;
  var localStorage;
  var window;

  // Injecting variables
  // http://stackoverflow.com/questions/13664144/how-to-unit-test-angularjs-controller-with-location-service
  beforeEach(inject(function($location,
    $rootScope,
    $controller,
    $firebaseArray,
    $localStorage,
    $sce,
    $window){
      // The injector unwraps the underscores (_) from around the parameter names when matching

      scope = $rootScope.$new();

      location = $location;
      controller = $controller;
      firebaseArray = $firebaseArray;
      sce = $sce;
      localStorage = $localStorage;
      window = $window;
    }));

    describe('TodoCtrl Testing', function() {
      it('setFirstAndRestSentence', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope
        });

        var testInputs = [
          {str:"Hello? This is Sung", exp: "Hello?"},
          {str:"Hello.co? This is Sung", exp: "Hello.co?"},
          {str:"Hello.co This is Sung", exp: "Hello.co This is Sung"},
          {str:"Hello.co \nThis is Sung", exp: "Hello.co \n"},
          {str:"Hello?? \nThis is Sung", exp: "Hello??"},
        ];

        for (var i in testInputs) {
          var results = scope.getFirstAndRestSentence(testInputs[i].str);
          expect(results[0]).toEqual(testInputs[i].exp);
        }
      });

      it('filterWord Testing', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope
        });

        it('watchcollection', function() {
          var ctrl = controller('TodoCtrl', {
            $scope: scope,
          });

          var testTodos = [{
            wholeMsg: "newTodo",
            head: "head",
            headLastChar: "?",
            desc: "desc",
            linkedDesc: "linkedDesc",
            completed: false,
            timestamp: 0,
            tags: "...",
            echo: 1,
            order: 3
          },{
            wholeMsg: "newTodo",
            head: "head",
            headLastChar: "?",
            desc: "desc",
            linkedDesc: "linkedDesc",
            completed: true,
            timestamp: 0,
            tags: "...",
            echo: 3,
            order: 2
          },{}];

          scope.todos = testTodos;
          scope.$digest();

          expect(scope.totalCount).toEqual(2);
          expect(scope.completedCount).toEqual(1);
        });

        var testInputs = [
          {str:"fuck you", exp: true},
          {str:"eat shit", exp: true},
          {str:"hello", exp: false},
        ];

        for (var i in testInputs) {
          var result = scope.filterWord(testInputs[i].str);
          expect(result).toEqual(testInputs[i].exp);
        }
      });

      it('addTodo', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope
        });

        scope.addTodo();
      });

      it('RoomId', function() {
        location.path('/new/path');

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location
        });

        expect(scope.roomId).toBe("new");
      });

      it('addEcho Testing', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope,
        });

        var test_todo = {
          wholeMsg: "newTodo",
          head: "head",
          headLastChar: "?",
          desc: "desc",
          linkedDesc: "linkedDesc",
          completed: false,
          timestamp: 0,
          tags: "...",
          echo: 0,
          order: 2
        };
        scope.addEcho(test_todo);

        expect(test_todo.echo).toBe(1);
        expect(test_todo.order).toBe(1);
      });

      it('increaseMax Testing', function() {
        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $window: window
        });

        scope.maxQuestion = 1;
        scope.totalCount = 100;
        scope.increaseMax();
        expect(scope.maxQuestion).toEqual(101);

        scope.maxQuestion = 100;
        scope.totalCount = 1;
        scope.increaseMax();
        expect(scope.maxQuestion).toEqual(100);
      });

      it('toTop Testing', function() {

        var ctrl = controller('TodoCtrl', {
          $scope: scope,
          $location: location,
          $firebaseArray: firebaseArray,
          $sce: sce,
          $localStorage: localStorage,
          $window: window
        });

        scope.toTop();
        expect(window.scrollX).toBe(0);
        expect(window.scrollY).toBe(0);
      });
    });
  });
