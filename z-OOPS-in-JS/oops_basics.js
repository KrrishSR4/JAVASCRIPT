// OOPS in JavaScript is a way to structure code using objects that combines properties and methods.


let a = {
    name: "Krrish",
    language: "javascript"
}

console.log(a)

let p = {
    run: () => {
        console.log("running")// in browser we use alert("running")
    }
}
//a.__proto__ = p
a.__proto__ = p

a.run() //throws an error

//after that we need to use prototype 


