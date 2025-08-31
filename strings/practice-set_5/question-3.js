// Extract the amount of the string :- 

// "please give Rs 1000"

let str = "please give Rs 1000";

let amount = Number.parseInt(str.slice("please gave Rs" .length));

console.log(amount);