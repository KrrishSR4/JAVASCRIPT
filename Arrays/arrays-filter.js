//filter() filters an array with values that passes tests. On console it creates a new array

/*const a = [1, 7, 9]
a.filter(a > 5) example*/

//example

let a = [1, 7, 9]

let b = a.filter((b) => {
    return b < 2;
})
console.log(b)//loggs  the new array with the condition (b < 2)