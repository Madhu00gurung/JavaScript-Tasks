// point a Define an array called people containing objects representing people
let people = [
    { name: "Jerry", age: 27 },
    { name: "Mahi", age: 25 },
    { name: "Devika", age: 20 },
    { name: "Raj", age: 23 }
];
// console.log(people)


// point b
function calculateAverageAge(peopleArray) {
    if (peopleArray.length === 0) {
      return 0; // Return 0 if array is empty to avoid division by zero
    }
  
    // Calculate the sum of ages using reduce method
    let sumOfAges = peopleArray.reduce((total, person) => total + person.age, 0);
  
    // Calculate the average age
    let averageAge = sumOfAges / peopleArray.length;
  
    // Return the average age rounded to 2 decimal places
    return averageAge.toFixed(2);
  }
  
  // Call the calculateAverageAge function with the people array as an argument
  let averageAge = calculateAverageAge(people);
  
  // Log the result to the console
  console.log("Average age:", averageAge);//doubt
  
  
