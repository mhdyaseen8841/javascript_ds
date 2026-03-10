// forEach is very similar to map but has two key differences:

// First of all, map returns a new Array, but forEach doesn't.


// Return a new array where even numbers are multiplied by 2 
let arr = [1, 2, 3, 4, 5, 6, 7]

function consoleEven(arr) {
  let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))

  console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
}


// ? is the ternary operator. If the condition is true - first statement is returned otherwise the second one.


consoleEven(arr)
console.log(arr)