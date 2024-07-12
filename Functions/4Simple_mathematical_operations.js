// point a Callback function: doubleNumber
function doubleNumber(num) {
    return num * 2;
};


// point b Callback function: squareNumber 
function squareNumber(num) {
    return num * num;
};


//point c Callback function: incrementNumber 
function incrementNumber(num) {
    return num + 1;
};


//point d Higher-order function: performOperation 
function performOperation(num, operation) {
    let result=operation(num);
    return result;
};


// point e
let number = 5;
console.log(performOperation(number, doubleNumber)); 
console.log(performOperation(number, squareNumber));
console.log(performOperation(number, incrementNumber));






