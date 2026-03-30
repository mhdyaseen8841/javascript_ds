for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


// i = 1 → schedule timeout
// i = 2 → schedule timeout
// i = 3 → schedule timeout
// i = 4 → loop stops (condition fails)

// IMPORTANT:
// After loop ends → i is now 4