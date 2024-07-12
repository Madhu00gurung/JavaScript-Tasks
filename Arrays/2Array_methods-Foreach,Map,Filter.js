// point a Define the Array
let numbers = [1, 2, 3, 4, 5];


// point b Iterate and Log Using forEach
numbers.forEach(function(number) {
  console.log(number);
});


numbers.forEach(function(number) {
  console.log(number * 2);
});//multiply


// point c Create and Log New Arrays Using map
let squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log("Squared numbers array using map:", squaredNumbers);

//arrow function
let squaredNumbersArrow = numbers.map(number => {
    return number * number
});
console.log("Using arrow function in map:", squaredNumbersArrow);


// point d Create and Log New Arrays Using filter
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log("Even numbers array using filter:", evenNumbers);

//arrow function
let evenNumbersArrow = numbers.filter(number => {
    return number % 2 === 0}
);
console.log("Even number using arrow fun:", evenNumbersArrow);
