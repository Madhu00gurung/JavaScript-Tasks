// point a
let fruits = ["apple", "banana", "cherry", "date"];


// point b
fruits.forEach((fruit) => {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});


// point c
let reversedFruits = fruits.map((fruit) => {
    return fruit.split('').reverse().join('');
});
console.log(reversedFruits);


// point d
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);


// point e
let aFruitsUpper = fruits.filter((fruit) => fruit.includes('a')).map((fruit) => fruit.toUpperCase());
console.log(aFruitsUpper);


// point f
let totalCharacters = 0;
fruits.forEach((fruit) => {
    totalCharacters += fruit.length;
});
console.log(totalCharacters);