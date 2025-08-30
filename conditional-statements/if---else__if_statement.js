//if...else if statement

let a = prompt("what is your age ?");

a = Number.parseInt(a);//converting string to number

if (a<0) {
    alert("this is an invalid age");
}

else if (a<=0) {
    alert("you are a kid and you can't even think of driving");
}

else if(a < 18 && a >=9) {
    alert("you are a kid and you can think of driving after 18");  
}

else{
    alert("you can now drive as you are above 18 years");
}



/*  if age is less than 0; output:- this is an invalid age
    else if age is between 0 to 9; output:- you are a kid and you can't even think of driving
    else if age is between 9 to 18; output:- you are a kid and you can think of driving after 18
    else; output:- you can now drive as you are above 18 years
*/