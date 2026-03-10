// Closure is a function that remembers and can access variables from its outer scope, even after that outer function has finished execution.
// it allow maintaining state and create private variables
// encapsulation

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}


// Disadvantages of Closures in JavaScript 😅
// Overconsumption of memory or memory leaks can happen.