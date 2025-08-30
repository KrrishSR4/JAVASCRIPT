//write a program in previous question using for...in loop

let marks = {
    krrish: 90, 
    tishu: 80,
    ayush: 66,
}

for (let key in marks) {
    console.log("the marks of " + key + " are " + marks[key]);
}