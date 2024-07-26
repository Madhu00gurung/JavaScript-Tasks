// point a forEachArray function
function forEachArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
let numbers = [1, 2, 3, 4, 5];
forEachArray(numbers, (element, index, array) => {
    console.log(`Element at index ${index}: ${element}`);
});
// doubt 2