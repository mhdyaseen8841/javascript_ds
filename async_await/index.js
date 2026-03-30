console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");



// Start 
// End 
// Promise
// Timeout  

// Synchrounous code fists -> MicroTask (Promises) - > MacroTask (setInterval,setTimeout,Dom Events)