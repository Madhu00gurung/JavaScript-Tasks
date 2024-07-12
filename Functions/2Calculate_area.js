// point a
function calculateArea(width,height) {
    return width * height;
};


// point b
console.log(calculateArea(5,10));


// point c 
function calculateArea(width = 1, height = 1) {
    return width * height;
};
console.log(calculateArea());


// point d
let calculateAreaFunction = function(width = 1, height = 1) {
    return width * height;
};
console.log(calculateArea());


// point e
let calculateArea1 = (width = 1, height = 1) => {
    return width * height;}
console.log(calculateArea(3,10));


