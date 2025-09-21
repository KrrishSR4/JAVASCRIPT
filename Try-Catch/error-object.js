try {
    krish;
} catch(error) {
    console.log(error.name);
    console.log(error.message);
}

// we can also create our own error object and throw it
let age = prompt("Enter your age");
try {
if(age < 18) {
    throw new Error("You are not allowed to drive");
}  } catch(error) {
    console.log(error.name);
    console.log(error.message);
}
// this will throw an error object with name and message property