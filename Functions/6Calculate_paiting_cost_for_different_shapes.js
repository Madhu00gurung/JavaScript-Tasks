// point a Define Callback Functions for Area Calculations
//area of a rectangle
let areaOfRectangle = (length, width) => {
    return length * width;
};

//area of a circle
let areaOfCircle = (radius) => {
    return Math.PI * radius * radius;
};

//area of a triangle
let areaOfTriangle = (base, height) => {
    return 0.5 * base * height;
};


// point b Function to calculate painting cost based on area calculation callback
let calculatePaintingCost = (dimension1, dimension2, calculateArea) => {//1
    let area = calculateArea(dimension1, dimension2);//2
    const costPerUnit = 2;//3
    let totalCost = area * costPerUnit;//4
    return totalCost;//5
};

// point c
const lengthRect = 5;
const widthRect = 10;
const costRectangle = calculatePaintingCost(lengthRect, widthRect, areaOfRectangle);
console.log('Cost to paint the rectangle:', costRectangle);

const radiusCircle = 3;
const costCircle = calculatePaintingCost(radiusCircle, null, areaOfCircle);
console.log('Cost to paint the circle:', costCircle);

const baseTriangle = 6;
const heightTriangle = 8;
const costTriangle = calculatePaintingCost(baseTriangle, heightTriangle, areaOfTriangle);
console.log('Cost to paint the triangle:', costTriangle);
//explain and understand how to work 