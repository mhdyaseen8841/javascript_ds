async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

console.log("C");

test();

console.log("D");

// (Hint: await = behaves like .then() → microtask)

C 
A 

D
B

// “await pauses execution and schedules the remaining code as a microtask, so it runs after synchronous code but before macrotasks.”