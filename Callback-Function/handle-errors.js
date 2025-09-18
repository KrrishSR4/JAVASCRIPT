// we can handle callback errors sypplying error argument to the callback function



function greet(name, callback) {
    if(!name) {
        // error case
        return callback(new Error("Name is required!"), null);
    }

    // success case
    console.log("Hello", name);
    callback(null, "Greeting done!");
}

greet("Krrish", (err, result) => {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log("Result:", result);
    }
});
