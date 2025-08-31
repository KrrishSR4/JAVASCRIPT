// reduce() :- reduces an array to a single value

/*const a = [1, 7, 9]
let sum = numbers.reduce(add):- in the place of this (add) we use function*/

//example

let a = [1, 7, 9]

let b = a.reduce((a1, a2) => {
    return a1 + a2
})
console.log(b)//loggs after adding with the condition (a1 + a2)and reduces into a single value

