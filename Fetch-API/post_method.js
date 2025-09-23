// Example of making a POST request using Fetch API with async/await

const { captureOwnerStack } = require("react");



async function sendData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const payload = {
    title: "Hello Krish",
    body: "This is a sample POST request using async/await.",
    userId: 1
  };

  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log("Server Response:", result);
  } 


sendData();




// Another example of POST request using Fetch API with async/await without try-catch

async function postData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = {
    title: "Async POST",
    body: "Sending data without try-catch block.",
    userId: 42
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  console.log("Response:", result);
}

postData();


