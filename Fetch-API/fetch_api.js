//fetch API is used to get data over the network


let p = fetch("https://goweather.herokuapp.com/weather/london");

p.then((value1) => {
  return value1.json();
})
.then((value2) => {
  console.log(value2);
});     