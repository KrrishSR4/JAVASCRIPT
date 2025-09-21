// try... catch syntax allows us to handle or catch errors so that the script instead of dying can do somethings more reasonable.

try {
    let Result = 10 / 0;
    console.log(krish);
} catch(error) {
    console.log("an error occured: " + error.message);
}

//handles the error and logs krish is not defined instead of the script dying
//ReferenceError: krish is not defined