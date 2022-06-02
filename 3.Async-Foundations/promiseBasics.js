// PROMISE:
// A promise is an object that represents a task that will be completed in the future

// Creating a Promise:
// A simple callback function
let p1 = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4]);
});

p1.then(function (arr) {
  console.log("Promise p1 resolved with data: ", arr);
});

// Handling Errors example

let p2 = new Promise(function (res, rej) {
  let num = Math.random();
  if (num < 0.5) {
    res(num);
  } else {
    rej(num);
  }
});

p2.then(function (res) {
  console.log("Success", res);
}).catch(function (err) {
  console.log("Error! ", err);
});

// setTimeout with Promise:

let promise = new Promise(function (ress, rejj) {
  setTimeout(function () {
    let randomId = Math.floor(Math.random() * 10);
    ress(randomId);
  }, 4000);
});
promise.then(function (data) {
  console.log("Random int passed to resolve", data);
});
