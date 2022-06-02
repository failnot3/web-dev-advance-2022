// setInterval - a fn that asynchronously and continuously
// invokes a callback every X ms, where X is provided to setInterval
// in miliseconds
function callback() {
  console.log("====================================");
  console.log("Callback is called continuously");
  console.log("====================================");
}

let repeat = 3000; // Delay in ms
setInterval(callback, repeat);

// Example with an anon fn:
let num = 0;
setInterval(function () {
  num++;
  console.log("Num: ", num);
}, 1000);

// Canceling setInterval
let number = 0;
let intervalId = setInterval(function () {
  number++;
  console.log("Num: ", number);
  if (number === 5) {
    clearInterval(intervalId);
  }
}, 1500);
