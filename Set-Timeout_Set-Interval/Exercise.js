// create a digital seconds clock using setInterval and date object in javascript.



setInterval(() =>{
let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
console.log("Date : " + d + " time : " + h + ":" + m + ":" + s);
}, 1000)
