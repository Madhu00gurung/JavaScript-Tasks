//point a addNumbers 
function addNumbers(num1, num2) {
    return num1 + num2;
};


//point b multiplyNumbers 
function multiplyNumbers(num1, num2) {
    return num1 * num2;
};


//point c subtractNumbers 
function subtractNumbers(num1, num2) {
    return num1 - num2;
};


//point d divideNumbers 
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Division by zero is not allowed";
    }
    return num1 / num2;
};


// ponit e Define the performArithmetic function 
function performArithmetic(num1, num2, operation) {
    let result=operation(num1, num2);
    return result;
};


// point f
let number1 = 10;
let number2 = 5;
console.log("Addnumbers =",performArithmetic(number1, number2, addNumbers));
console.log("Mu;tiplynumbers =",performArithmetic(number1, number2, multiplyNumbers));
console.log("Substractnumbers =",performArithmetic(number1, number2, subtractNumbers));
console.log("Dividnumbers =",performArithmetic(number1, number2, divideNumbers)); 
console.log(performArithmetic(number1, 0, divideNumbers)); 


