// 1. to log the length of the string

let name = "Krrish"

console.log(name.length);//loggs the lemgth of the string



// 2. to change the string to uppercase

console.log(name.toUpperCase());//loggs the string in uppercase


// 3. to change the string to lowercase

console.log(name.toLowerCase());//loggs the string in lowercase


// name.slice() => slices the string and returns the sliced part as a new string

console.log(name.slice(2, 4));//loggs the string from index 2 to index 4 (4 not included)
//name.slice example-2
console.log(name.slice(2))//loggs the string from index 2 to end of the string


// 4. to replace a part of the string with another string

console.log(name.replace("rr", "RR"));//loggs KRRish rr replaced with RR


// trim() => removes whitespace from both ends of a string

let name2 = "     krrish     "

console.log(name.trim());// removes extra spaces from both of the ends


