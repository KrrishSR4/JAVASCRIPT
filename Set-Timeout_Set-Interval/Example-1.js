//example


const sum = (a, b, c) => {
    console.log("Yes I'm Adding the sum of 10, 20 and 30") //logs first

    setTimeout(function (){
        console.log(a + b + c)
    }, 5000); //logs after 5 seconds
}

sum (10, 20, 30)