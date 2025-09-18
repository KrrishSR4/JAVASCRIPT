//synchronous programming is when tasks are performed one after another

//example

let a = 10;
let b = 20;
console.log(a+b);

//asynchronous programming is when tasks are performed independently of the main program flow

//example

console.log("Start")
setTimeout(() => {
    console.log("Krrish")
}, 2000)
console.log("End")