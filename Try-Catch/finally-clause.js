//finally block always runs, regardless of whether an error occurred or not.

try {
  console.log(" Trying to run code...");
  let result = 10 / 0;//
  console.log(krish);// this will throw an error
} catch (error) {
  console.log(" Error caught:", error.message);// handles the error
} finally {
  console.log(" Finally block always runs.");// always runs
}

