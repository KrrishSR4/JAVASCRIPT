//use logical operators to find whether the age of a person lies between 10 and 20.....

let age = prompt("What is your age ?");

age =Number.parseInt(age)

if (age>10 && age<20){
    console.log("your age lies between 10 and 20");
}

else{
    console.log("your age does not lies between 10 and 20");
}

/* if age is greater than 10 and less than 20
output:- your age lies between 10 and 20
else
output:- your age does not lies between 10 and 20
*/