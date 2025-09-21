//

async function krish () {
    let delhiWeather = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg");
        }, 1000);
    });
    let bangloreWeather = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg");
        }, 2000);
    });

    console.log("Fetching Delhi Weather Please wait....");
    let delhiW = await delhiWeather;
    console.log("Fetched Delhi Weather: " + delhiW);

    console.log("Fetching Banglore Weather Please wait....");
    let bangloreW = await bangloreWeather;
    console.log("Fetched Banglore Weather: " + bangloreW);
    
    return [delhiW, bangloreW];
}

console.log("welcome to weather control room");
let a = krish();
a.then((value) => {
    console.log(value)
})