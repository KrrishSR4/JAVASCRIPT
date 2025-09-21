// We can attach multiple handlers to one promise. They dont pass the result to each other; instead, they process it independently. 

let p1 = new Promise ((resolve, reject) => {
    console.log("Promise is not resolved yet")
    setTimeout (() => {
        resolve(1);
    }, 2000);
});

p1.then(() => {
    console.log("Congrats promise is now resolved");
});

p1.then(() => {
    console.log("Woohoooo..!!")
})