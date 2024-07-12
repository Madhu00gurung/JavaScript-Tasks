// a point
function greet(name) {
    return `Hello, ${name}!`;
}


// b piont
console.log(greet("Madhu")); 


// c point
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());


// d point
let greetFunction = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetFunction("Gurang")); 


// e point
let greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Mahi"));  
        

        
