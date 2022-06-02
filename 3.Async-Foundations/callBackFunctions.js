// A callback function is a function that is passed into another function as a Parameter
// then invoked by that other function.

// Example:
function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // Callback function is invoked
  console.log("Callback has been invoked!");
}
higherOrder(callback);
// A higher order function is a function that accepts a callback as a parameter.

// What are callbacks used for?
// * Advanced array Methods
// * Browser events
// * AJAX Requests
// * React Development

// Code reuse with callbacks

function sendMessage(message, callback) {
  return callback(message);
}
sendMessage("Message for console", console.log);
let ans = sendMessage("Are you sure?", confirm);
