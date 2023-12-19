//PROMISE
//promise is an object which represents eventual completion or failure of async operations and its resulting value
//instead of immediately returning value, async operations returns a promise that will be filled with data at sometime
//This lets asynchronous methods return values like synchronous methods


//STATES
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

let promise =new Promise((resolve,reject)=>{
    resolve("this is resolved");
    reject("this is rejected")
})