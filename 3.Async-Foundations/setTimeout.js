// setTimeout - a fn that asynchronously invokes a callback after a delay
// in miliseconds
function callback() {
  console.log("====================================");
  console.log("Callback function");
  console.log("====================================");
}

let delay = 1000; // Delay in ms
setTimeout(callback, delay);
