// point a
let temperatures = [-3, 14, 22, 5, -10];


// point b
temperatures.forEach((temperature) => {
    console.log(temperature);
});


// point c
temperatures.forEach((temperature) => {
    let fahrenheit = (temperature * 9/5) + 32;
    console.log(`${temperature}°C is ${fahrenheit}°F`);
});


// point d
let temperaturesInFahrenheit = temperatures.map((temperature) => {
    return (temperature * 9/5) + 32;
});
console.log(temperaturesInFahrenheit);

// point e
let belowFreezing = temperatures.filter((temperature) => temperature < 0);
console.log(belowFreezing);

