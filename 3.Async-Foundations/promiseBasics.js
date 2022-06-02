// PROMISE:
// A promise is an object that represents a task that will be completed in the future

// Creating a Promise:
let p1 = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4]);
});

p1.then(function (arr) {
  console.log("Promise p1 resolved with data: ", arr);
});
// The Event LOOP
// Functionality in the JS runtime that checks the queue when the Stack is empty.
// If the Stack is empty, the front of the queue is placed in the Stack!

// JS is Single Threaded meaning Code execution is linear.
// Code that is running cannot be interrupted by
// something else going on in the program.
