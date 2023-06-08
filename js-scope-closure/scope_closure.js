///// M V P ///////

/******************************************************************************\
	Task 1: `counterMaker`
\******************************************************************************/
/****** INSTRUCTIONS TASK 1 ******/
/*
 * Study the code below for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter1 uses local variables while conter2 uses global variables.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter2 uses closure because it access its outer function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * The counter1 code, which utilizes a closure, would be preferable in scenarios where you want to maintain and encapsulate the state of the counter within the function scope.
 * counter2 code relies on a global variable count. This approach can be useful in scenarios where you need to share and access the counter's state across multiple functions or different parts of your codebase

*/

//counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/******************************************************************************\
	Task 2: Get Motivated
\******************************************************************************/

/****** INSTRUCTIONS TASK 2 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname) {
  var welcomeText = "You're doing awesome, keep it up ";

  // code message function here.
  function message() {
    return welcomeText + firstname + " " + lastname;
  }

  // Call message function and return its result.
  return message();
}

//Uncommment this to return the value of your invoked message function
//return message();

console.log(motivation("Mohamed", "Ali")); // 'You're doing awesome keep it up Mohamed Ali.

/******************************************************************************\
 Task 3: Find Your Friends
 \******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */

var friends = ["Ahmed", "Khadijo", "Farah"];
var secondLevelFriends = ["Mahad", "Farah", "Mohamed"];
var allUsers = [
  "Ahmed",
  "Khadijo",
  "Farah",
  "Mahad",
  "Mohamed",
  "Bashir",
  "Ali",
];

function findPotentialFriends(existingFriends) {
  return function (user) {
    return !existingFriends.includes(user);
  };
}

var isNotAFriend = findPotentialFriends(friends);
console.log(isNotAFriend(allUsers[0]));
console.log(isNotAFriend(secondLevelFriends[2]));
// isNotAFriend(allUsers[0]); // false
// isNotAFriend(secondLevelFriends[2]); // true

/******************************************************************************\
	Task 4: Keep a log
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.
 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    (function (num) {
      setTimeout(function () {
        console.log(num);
      }, num * 1000);
    })(i);
  }
}

timeOutCounter();

/******************************************************************************\
	Task 5: Check if name exists
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

function contains(array, name, callback) {
  if (array.includes(name)) {
    callback(true);
  } else {
    callback(false);
  }
}
const names = ["Ali", "Abdi", "Yousuf"];

function callbackF(result) {
  if (result) {
    console.log("Name exists in the array.");
  } else {
    console.log("Name does not exists in the array.");
  }
}
console.log(contains(names, "Ali", callbackF));
console.log(contains(names, "Ahmed", callbackF));
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
let currentValue = 0;
const counter = () => currentValue == 0;

const increment = function (val) {
  currentValue += val;
  console.log(currentValue);

  // Return a function that when invoked increments and returns a counter variable.
};
console.log(counter());
increment(5);
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let currentValue = 0;
  return {
    increment: function () {
      currentValue++;
    },

    decrement: function () {
      currentValue--;
    },
    getValue: function () {
      return currentValue;
    },
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const factory = counterFactory();
console.log(factory.getValue());
factory.increment();
factory.increment();
console.log(factory.getValue());
factory.decrement();
console.log(factory.getValue());
