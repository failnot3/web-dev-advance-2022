// What is the stack?

// An ordered data structure
// Keeps track of function invocations
// Part of the JS runtime!

// Stack example

function multiply(x, y) {
  return x * y;
}

let res = multiply(3, 5);

// Stack:
// [StackFrame] function: multiply -> when is finished is taken off the Stack
// [StackFrame] function: main -> when is finished is taken off the Stack and the runtime waits for something to do.
// [StackFrame] = the function that was invoked, the parameters that were passed to the function, current line number

// Stack is and ordered set of stack frames - from line 1 to line x

// Heap is the area of memory where our data is stored!
