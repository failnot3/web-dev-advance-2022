// A callback function is a function that is passed into another function as a Parameter
// then invoked by that other function.

// Example:
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
