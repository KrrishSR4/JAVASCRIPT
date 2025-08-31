// map() :- creates a new array by performing some operation on each array element

/*const a = [1, 2, 3]

a.map((value, index, array) => {
    return value*value;
})*/

//exampleṇṇ

let a = [1, 7, 9]

let b = a.map((value) => {
    console.log(value)//loggs the array in very next lines
    return value + 6
})
console.log(b)//loggs the updated value of the array