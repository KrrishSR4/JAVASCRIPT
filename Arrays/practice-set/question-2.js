//question -2 :- filter for number which is divisible by 10 from an array

let a = [5, 6, 60, 70, 80, 20, 110];

let b = a.filter((x) => {
    return x%10 == 0               
})

console.log(b);
