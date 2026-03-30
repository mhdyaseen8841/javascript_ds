function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();
fn();
fn();


// A closure is when a function remembers
//  and can access variables from its outer scope even after the outer function has finished executing.