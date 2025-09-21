// handling errors in promise using .catch() method


let p1 = new Promise ((resolve, reject) => {
    console.log("Promise is pending....");
    setTimeout(() => {
        console.log("Promise is fulfilled")
        resolve(true);
    }, 5000);
});



let p2 = new Promise ((resolve, reject) => {
    console.log("Promise is pending....");
    setTimeout(() => {
        console.log("Promise is failed")
        reject(new Error("I'm an error"));
    }, 5000);
});

//to get the value
p1.then((value) => {
    console.log(value);
});

//to handle or catch the error
p2.catch((error) => {
    console.log("Some error occurred in p2");
});