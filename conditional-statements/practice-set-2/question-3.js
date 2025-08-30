//write a program to find wheter  a number is divisible by 2 or 3 


let num = prompt("enter a number....");

num = Number.parseInt(num)

if (num%2==0 && num%3==0){
    console.log("your number is divisible by 2 or 3");
}

else {
    console.log("your number is not divisible by 2 or 3");
}

/* if number is divisible by 2 and 3
output:- your number is divisible by 2 or 3
else
output:- your number is not divisible by 2 or 3
*/