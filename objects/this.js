function myFunc() {
    console.log(this)     
  }

const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc()

myFunc()


// implicit binging - Implicit binding happens when a function is called using a dot notation (object.method()).

// explicait binding - Explicit binding is when we manually set the value of this using .call(), .apply(), or .bind().

// ----------------------------------

// Prototypes and Prototypal Inheritance in JavaScript

// __proto__ is the object where JS is putting it all.

let arr = ['Rajat', 'Raj']
console.log(arr.__proto__.forEach)
console.log(arr.__proto__) // same as Array.prototype
console.log(arr.__proto__.__proto__) // same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // null