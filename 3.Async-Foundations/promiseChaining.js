// Objectives:
// * Describe the disadvantages of using nested callbacks
// * Return a promise from a .then callback function
// * Use a promise to make asynchronous code seem sequential

// Example for nested async callbacks
// Disadvantages of Nested Callbacks:
// * The code is hard to read
// * Logic is difficult to reason about
// * The code is not modular
let counter = 0;
setTimeout(function () {
  counter++;
  console.log("Counter:", counter);
  setTimeout(function () {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function () {
      counter++;
      console.log("Counter:", counter);
    }, 3000);
  }, 2000);
}, 1000);

// this can be refactored to:
// ========
var counterOne = 0;
function incCounter() {
  counterOne++;
  console.log("Counter:", counterOne);
}

function runLater(callback, timeInMs) {
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000)
  .then(function () {
    return runLater(incCounter, 2000);
  })
  .then(function () {
    return runLater(incCounter, 3000);
  });
// ========

// Promise Chaining:
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise
  .then(function (data) {
    console.log("Random int passed to resolve:", data);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(Math.floor(Math.random() * 10));
      }, 3000);
    });
  })
  .then(function (data) {
    console.log("Second random int passed to resolve:", data);
  });

// Returning Data:
let promiseData = new Promise(function (resolve, reject) {
  resolve(5);
});

promiseData
  .then(function (data) {
    return data * 2;
  })
  .then(function (data) {
    return data + 20;
  })
  .then(function (data) {
    console.log(data);
  });
