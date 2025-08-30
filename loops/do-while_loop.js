// do while loop

/* do {
    code to be executed
    increment or decrement(i++: i--);
} while (condition);
*/

let n = prompt("enter value of n")

n = Number.parseInt(n)

let i = 0;

do {
    console.log(i);
    i++
}

while(i<n);

// output
// 0
// 1