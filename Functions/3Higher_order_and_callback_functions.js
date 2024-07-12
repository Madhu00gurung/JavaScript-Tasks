// point a Define higherOrderFunction
function higherOrderFunction(num, callback) {
    callback(num);
};


//point b Define callbackFunction
function callbackFunction(num) {
    console.log("this is num:",num);
};
//Call higherOrderFunction with callbackFunction
higherOrderFunction(10, callbackFunction); 


// point c Modify the call to higherOrderFunction with function expression 
higherOrderFunction(5, function(num) {
    console.log(num);
}); 


// point d
higherOrderFunction(7, function(num) {
    console.log(num * num);
}); 


// point e 
function newHigherOrderFunction(num1,  num2, callback) {
    callback(num1, num2);
};


newHigherOrderFunction(2, 3, function(num1, num2) {
    console.log(num1 + num2);
});

