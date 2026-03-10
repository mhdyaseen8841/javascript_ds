// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of these three states:

// Pending: initial state, neither fulfilled nor rejected
// Fulfilled: operation was completed successfully
// Rejected: operation failed

const promise = new Promise((resolve, reject) => {
  let value = true
  if (value) {
    resolve('hey value is true')
  } else {
    reject('there was an error, value is false')
  }
})

promise
  .then((x) => {
    console.log(x)
  })
  .catch((err) => console.log(err))



  
  const pr = new Promise((resolve,reject)=>{
    let a =2;
    if(a==1)
        resolve("success")
    else
        resolve('false')
  })

  pr.then((x)=>{
    console.log(x)
  }).catch((err)=>console.log(err))