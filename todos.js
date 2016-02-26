// Make a todo list

// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.
var generateID = makeCounter();

// EXERCISE 1
var todos = [

];

function makeList(initial) {
  var todos = initial;

  function displayTodo(todo) {
    // EXERCISE 2
  }

  return {
    display: function() {
      // EXERCISE 3
    }
  };
}

var todoList = makeList(todos);

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
