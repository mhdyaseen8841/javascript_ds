// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.


setTimeout(() => {
    console.log('Here - I am after 2 seconds')
}, 2000);



  for (var i = 1; i <= 5; i++) {
    console.log(i)
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
