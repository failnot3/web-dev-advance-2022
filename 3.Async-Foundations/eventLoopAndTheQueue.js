// The Queue
// An ordered list of functions(fn) waiting to be placed in the stack

// Functions in the queue are procedssed on a FIFO - first in, first out!

// The Event LOOP
// Functionality in the JS runtime that checks the queue when the Stack is empty.
// If the Stack is empty, the front of the queue is placed in the Stack!

// JS is Single Threaded meaning Code execution is linear.
// Code that is running cannot be interrupted by
// something else going on in the program.

setTimeout(function () {
  console.log("Hello from timeout");
}, 0);

for (let i = 0; i < 1000000; i++) {
  let x = i * 2;
}
console.log("Done with the loop!");
