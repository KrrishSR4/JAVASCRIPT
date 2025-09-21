// there are 6 static methodsof promise classes are as follows:- 


//1. 
Promise.all([
  Promise.resolve("A"),  //Waits for all promises to resolve. Fails if any one fails.
  Promise.resolve("B")
]).then(console.log);

//2.
Promise.allSettled([
  Promise.resolve("A"),  //Waits for all promises to settle (fulfilled or rejected)
  Promise.reject("B")
]).then(console.log); 

//3. 
Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 100)),
  new Promise(res => setTimeout(() => res("Slow"), 500))  //Returns the result of the first settled promise.
]).then(console.log);

//4. 
Promise.any([
  Promise.reject("Fail"),
  Promise.resolve("Win"),
  Promise.resolve("Also Win")  //Returns the result of the first fulfilled promise. Ignores rejections
]).then(console.log);

//5. 
Promise.resolve("Success").then(console.log); //Creates a promise that is already fulfilled


//6. 
Promise.reject("Error").catch(console.error);//Creates a promise that is already rejected.
