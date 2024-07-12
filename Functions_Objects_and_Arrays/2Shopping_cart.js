// point a Define the cart array containing items
let cart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Headphones", price: 100, quantity: 2 },
    { name: "Mouse", price: 20, quantity: 3 },
    { name: "Keyboard", price: 150, quantity: 1 }
];
  
// point b Define the calculateTotalPrice function
function calculateTotalPrice(cart) {
    let totalPrice = 0;

    for (let item of cart) {
      totalPrice += item.price * item.quantity; // Calculate total price for each item
    }
    return totalPrice;
}
  
// point c Call the calculateTotalPrice function with the cart array as argument Log the result to the console
let total = calculateTotalPrice(cart);
console.log("Total price of the cart:", total);
  