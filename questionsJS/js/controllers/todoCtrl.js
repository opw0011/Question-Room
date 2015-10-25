/*global todomvc, angular, Firebase */
'use strict';



/**
* The main controller for the app. The controller:
* - retrieves and persists the model via the $firebaseArray service
* - exposes the model to the template and provides event handlers
*/
todomvc.controller('TodoCtrl',
['$scope', 'ezfb', '$location', '$firebaseArray', '$sce', '$localStorage', '$window', '$timeout',
function ($scope, ezfb, $location, $firebaseArray, $sce, $localStorage, $window, $timeout) {

	updateLoginStatus(updateApiMe);

  $scope.login = function () {
    /**
     * Calling FB.login with required permissions specified
     * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.5
     */
    ezfb.login(function (res) {
      /**
       * no manual $scope.$apply, I got that handled
       */
      if (res.authResponse) {
        updateLoginStatus(updateApiMe);
      }
    }, {scope: 'email,user_likes'});
  };

  $scope.logout = function () {
    /**
     * Calling FB.logout
     * https://developers.facebook.com/docs/reference/javascript/FB.logout
     */
    ezfb.logout(function () {
      updateLoginStatus(updateApiMe);
    });
  };

  $scope.share = function () {
    ezfb.ui(
      {
        method: 'share',
        name: 'question room questions',
        picture: '../../favicon.png',
        href: 'https://comp3111-qroom.firebaseapp.com/',
        description: 'Nicee post in Question Room!' +
                     'Please take a look.'
      },
      function (res) {
        // res: share response
      }
    );
  };

  /**
   * Update loginStatus result
   */
  function updateLoginStatus (more) {
    ezfb.getLoginStatus(function (res) {
      $scope.loginStatus = res;

      (more || angular.noop)();
    });
  }

  /**
   * Update api('/me') result
   */
  function updateApiMe () {
    ezfb.api('/me', function (res) {
      $scope.apiMe = res;
    });
  }

	// set local storage
	$scope.$storage = $localStorage;

	var scrollCountDelta = 10;
	$scope.maxQuestion = scrollCountDelta;

	var splits = $location.path().trim().split("/");
	var roomId = angular.lowercase(splits[1]);
	if (!roomId || roomId.length === 0) {
		roomId = "all";
	}

	// TODO: Please change this URL for your app
	var firebaseURL = "https://comp3111-qroom.firebaseio.com/";

	$scope.roomId = roomId;
	var url = firebaseURL + roomId + "/questions/";
	var echoRef = new Firebase(url);

	var query = echoRef.orderByChild("order");
	// Should we limit?
	//.limitToFirst(1000);
	$scope.todos = $firebaseArray(query);

	//$scope.input.wholeMsg = '';
	$scope.editedTodo = null;

	// pre-precessing for collection
	$scope.$watchCollection('todos', function () {
		var total = 0;
		var remaining = 0;
		$scope.todos.forEach(function (todo) {
			// Skip invalid entries so they don't break the entire app.
			if (!todo || !todo.head ) {
				return;
			}

			total++;
			if (todo.completed === false) {
				remaining++;
			}

			// set time
			todo.dateString = new Date(todo.timestamp).toString();
			todo.tags = todo.wholeMsg.match(/#\w+/g);
			todo.trustedDesc = todo.linkedDesc;
		});

		$scope.totalCount = total;
		$scope.remainingCount = remaining;
		$scope.completedCount = total - remaining;
		$scope.allChecked = remaining === 0;
		$scope.absurl = $location.absUrl();
	}, true);

	//filter words detector, return true is detected
	$scope.filterWord = function($string) {
		var str = $string;
		//filtered words library
		var filterWords = ["shit", "fuck", "asshole","diu","wtf"];
		//"i" is to ignore case and "g" for global
		var wRegExp = new RegExp(filterWords.join("|"), "gi");
		return wRegExp.test(str);
	};

	// Get the first sentence and rest
	$scope.getFirstAndRestSentence = function($string) {
		var head = $string;
		var desc = '';

		var separators = [". ", "? ", "! ", '\n'];

		var firstIndex = -1;
		for (var i in separators) {
			var index = $string.indexOf(separators[i]);
			if (index == -1) continue;
			if (firstIndex == -1) {firstIndex = index; continue;}
			if (firstIndex > index) {firstIndex = index;}
		}

		if (firstIndex !=-1) {
			head = $string.slice(0, firstIndex+1);
			desc = $string.slice(firstIndex+1);
		}
		return [head, desc];
	};

	$scope.addTodo = function () {
		var newTodo = $scope.input.wholeMsg.trim();
		var todoID = $scope.input.email;

		if (!newTodo.length) {
			return;
		}

		var firstAndLast = $scope.getFirstAndRestSentence(newTodo);
		var head = firstAndLast[0];
		var desc = firstAndLast[1];

		$scope.todos.$add({
			wholeMsg: newTodo,
			head: head,
			headLastChar: head.slice(-1),
			desc: desc,
			linkedDesc: Autolinker.link(desc, {newWindow: false, stripPrefix: false}),
			completed: false,
			timestamp: new Date().getTime(),
			tags: "...",
			email: todoID,
			echo: 0,
			order: 0
		});
		// remove the posted question and email address in the input
		$scope.input.wholeMsg = '';
		$scope.input.email = '';
		// set time interval to 5s to prevent user keep posting questions
		$scope.setPostTimeInterval();
	};

	$scope.editTodo = function (todo) {
		$scope.editedTodo = todo;
		$scope.originalTodo = angular.extend({}, $scope.editedTodo);
	};

	$scope.addEcho = function (todo) {
		$scope.editedTodo = todo;
		todo.echo = todo.echo + 1;
		// Hack to order using this order.
		todo.order = todo.order -1;
		$scope.todos.$save(todo);

		// Disable the button
		$scope.$storage[todo.$id] = true;
	};

	$scope.subEcho = function (todo) {
		$scope.editedTodo = todo;
		todo.echo = todo.echo - 1;
		// Hack to order using this order.
		todo.order = todo.order +1;
		$scope.todos.$save(todo);

		// Disable the button
		$scope.$storage[todo.$id] = false;
	};

	$scope.doneEditing = function (todo) {
		$scope.editedTodo = null;
		var wholeMsg = todo.wholeMsg.trim();
		if (wholeMsg) {
			$scope.todos.$save(todo);
		} else {
			$scope.removeTodo(todo);
		}
	};

	$scope.revertEditing = function (todo) {
		todo.wholeMsg = $scope.originalTodo.wholeMsg;
		$scope.doneEditing(todo);
	};

	$scope.removeTodo = function (todo) {
		$scope.todos.$remove(todo);
	};

	$scope.clearCompletedTodos = function () {
		$scope.todos.forEach(function (todo) {
			if (todo.completed) {
				$scope.removeTodo(todo);
			}
		});
	};

	$scope.toggleCompleted = function (todo) {
		todo.completed = !todo.completed;
		$scope.todos.$save(todo);
	};

	$scope.markAll = function (allCompleted) {
		$scope.todos.forEach(function (todo) {
			todo.completed = allCompleted;
			$scope.todos.$save(todo);
		});
	};

	$scope.increaseMax = function () {
		if ($scope.maxQuestion < $scope.totalCount) {
			$scope.maxQuestion+=scrollCountDelta;
		}
	};

	$scope.toTop =function toTop() {
		$window.scrollTo(0,0);
	};

	// Not sure what is this code. Todel
	if ($location.path() === '') {
		$location.path('/');
	}
	$scope.location = $location;

	// autoscroll
	angular.element($window).bind("scroll", function() {
		if ($window.innerHeight + $window.scrollY >= $window.document.body.offsetHeight) {
			console.log('Hit the bottom2. innerHeight' +
			$window.innerHeight + "scrollY" +
			$window.scrollY + "offsetHeight" + $window.document.body.offsetHeight);

			// update the max value
			$scope.increaseMax();

			// force to update the view (html)
			$scope.$apply();
		}
	});

	// set post time interval to prevent user repeating post questions
	$scope.setPostTimeInterval = function () {
		// disable the button after post button clicked
		angular.element(document.getElementById('btn_post'))[0].disabled = true;
		// console.log("Post Time interval start");

		// time count donw
		$scope.postTimeCounter = 5;

		// refresh and display the time count
		$scope.onTimeout = function(){
			// console.log($scope.postTimeCounter);
			$scope.postTimeCounter--;
			mytimeout = $timeout($scope.onTimeout,1000);
		}
		var mytimeout = $timeout($scope.onTimeout, 1000);

		// terminal the timer after 5 seconds
		$timeout(function() {
			$timeout.cancel(mytimeout);
			// console.log("Post Time interval end");
			angular.element(document.getElementById('btn_post'))[0].disabled = false;
			$scope.postTimeCounter = 0;
		}, 5000);
	}
}]);
