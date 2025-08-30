// for in loop

/* for (key in object)
 {
   code to be executed
 }
*/


let obj = {
    krish: 90,
    tishu:99,
    ankit: 70,
    rahul: 80,
}

for(let a in obj) {
    console.log("marks of " + a + " are " + obj[a]);
}


//logs keys with values one by one

//marks of krish are 90...and so on....!