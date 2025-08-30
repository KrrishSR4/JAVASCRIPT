//write a program in javascript to add sum of n natural numbers

let sum = 0

let n = prompt ("enter values of n");

n = Number.parseInt(n)

for (let i = 0; i<n; i++)
{
    sum += (i+1)
}
console.log("sum of first" + n + "natural numbers is" +sum);


/* if n=5
output:- sum of first 5 natural numbers is 15
if n=10
output:- sum of first 10 natural numbers is 55
*/
    