// .then() and .catch() methods

// The .then() method is used to handle the successful resolution of a promise.
// The .catch() method is used to handle the rejection of a promise.(or to handle errors)



let promise = new Promise ((resolve, reject) => {

    let success = true;
    if (success) {
        resolve ("Task completed successfully");
    }
    else {
        reject("Task failed, Try again later")
    }
});

promise.then((success) => {
    console.log("Success:", success);
});
promise.catch((error) => {
    console.log("Error:", error);
});

