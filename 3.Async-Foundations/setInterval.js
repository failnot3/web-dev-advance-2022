// setInterval - a fn that asynchronously and continuously
// invokes a callback every X ms, where X is provided to setInterval
// in miliseconds
function callback() {
  console.log("====================================");
  console.log("Callback is called continuously");
  console.log("====================================");
}

let repeat = 3000; // Delay in ms
setTimeout(callback, repeat);

// Example with an anon fn:
let num = 0;
setTimeout(function () {
  num++;
  console.log("Num: ", num);
}, 1000);
