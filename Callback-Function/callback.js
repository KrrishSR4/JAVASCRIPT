// A callback function is a function that is passed into another function as an argument, which is then involved inside  the outer function to complete an action


//example

function greet(name, callback){
    console.log("hello ", name);
    callback();
}

function saybye () {
    console.log("Nice to meet you");
}

greet("Krrish", saybye)