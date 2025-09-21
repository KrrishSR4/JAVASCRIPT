//  A Promise in JavaScript is an object that represents the eventual result (success or failure) of an asynchronous operation.


let promise = new Promise(function(resolve, reject)  {
    let success = true;

    if (success) {
        resolve ("Operation was successful");
    }
    else {
        reject ("Operation failed")
    }
})

console.log(promise);

//log the result of the promise 