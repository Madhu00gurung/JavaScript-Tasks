// point a Define and Log the colors Array
let colors = ["red", "green", "blue"];
console.log("First color:", colors[0]);


// point b Modify and Add color elements
colors[1] = "yellow";
console.log("Second color yellow after modificatio:", colors[1]);

colors.push("purple"); 
console.log("Last color purple after adding:", colors[colors.length - 1]);


// point c Iterate using Loops over the colors Array
// For loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
};

// While loop
let j = 0;
while (j < colors.length) {
  console.log(colors[j]);
  j++;
};

// for...of loop
for (let color of colors) {
  console.log(color);
};


// point d Check Array Properties
console.log("Type of colors array:", typeof colors);
console.log("Length of colors array:", colors.length);


// point e Array Methods
colors.push("orange");
console.log("Colors array after pushing 'orange':", colors);

let removedColor = colors.pop(); // Remove the last color
console.log("Removed color:", removedColor);
console.log("Colors array after popping:", colors);

let indexOfBlue = colors.indexOf("blue"); 
console.log("Index of blue colors:", indexOfBlue);


// point f Add and Iterate Over Properties
colors.owner = "Your Name";
console.log("Colors array with owner property:", colors);

//for...in loop
for (let key in colors) {
  console.log(`${key}: ${colors[key]}`);//key and value
};
