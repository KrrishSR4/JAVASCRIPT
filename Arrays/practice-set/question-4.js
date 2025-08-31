// question -4 :- use reduce to calculate factorial of a given number from an array of the first 'n' natural numbers

let a = [1, 2, 3, 4, 5 ,6, 7 ,8, 9];

let b = a.reduce((x1, x2) => {
    return x1*x2
})

console.log(b);