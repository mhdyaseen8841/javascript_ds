const user = {
  name: "Yaseen",
  greet: function () {
    console.log(this.name);
  }
};

user.greet()  // gets yaseen

const greetFn = user.greet; 
greetFn() // gets undefined becuase i copied only fn
const userFn = user
console.log(userFn)



userFn.greet()


// this depends on how a function is called, NOT where it is defined.


// Binding>>>>>>>>>>>>>>>>>>>>
// Binding means setting or fixing the value of this for a function.

// What is this in JavaScript?

// this is a special keyword in JavaScript that refers to the object that is executing the current function,
//  and its value is determined by how the function is called, not where it is defined.


// EXPLAIN
// In JavaScript, this refers to the object that calls the function. Its value is determined at runtime based
//  on how the function is invoked. Binding is the process of explicitly setting the value of this, using 
//  methods like call, apply, or bind. If a method is detached from its object, this is lost unless 
//  explicitly bound.

const user1 = {
  name: "Yaseen",
  greet: function () {
    console.log(this.name);
  }
};

const test = new user1

console.log(test)