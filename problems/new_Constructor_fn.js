// The new keyword is used to create instances from constructor functions or classes. 


// A constructor function is a special type of function used to create and initialize objects. 
// It acts like a blueprint for creating multiple objects with similar properties and methods.


function User(name) {
  this.name = name;
  this.greet = function () {
    console.log(this.name);
  };
}

const u1 = new User("Yaseen");
const u2 = new User("Ali");

// A constructor function is used to create multiple objects using a common blueprint,
//  and the new keyword creates a new instance, sets this to that object, links the prototype,
//  and returns it automatically



const User = (name) => {
  let user = name
  return name
};

let u11 = User("Yaseen")
let u22= User("ABU")





function User1(name, email) {
  
    let getProfile = function () {
    return `${name} (${email})`;
  };
  console.log(getProfile())
}

User1("yaseen","yaseen@123")


// const u1 = new User("Yaseen", "yaseen@mail.com");



// Yes, we can create objects without using constructor functions or the this keyword by using factory functions.
//  A simple factory returns a new object each time. For better memory efficiency, we can use Object.
// create to share methods across instances, similar to how prototypes work in constructor functions.




// check again
// Pattern	Memory
// Constructor + inline method	❌ Bad
// Constructor + prototype	✅ Good
// Factory + inline method	❌ Bad
// Factory + Object.create	✅ Good