// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// EXERCISE 1
// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 2
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}

// EXERCISE 3
function displayTodo(todo) {
  // your code here
}

// EXERCISE 4
// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;

  return {
    display: function() {
      // EXERCISE 5
    },
    add: function(task) {
      // EXERCISE 6
    }
  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
