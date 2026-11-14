
// Assignment 17 & 18: Loop problems and Debugging

// Problem 1: Print even numbers optimally
function getEvens(n) {
    let result = [];
    for(let i = 2; i <= n; i += 2) {
        result.push(i);
    }
    return result;
}
console.log("Evens up to 20:", getEvens(20));

// Problem 2: Debugging array sum
// Original Bug: using i <= arr.length which causes an out-of-bounds undefined error returning NaN
function sumArrayFixed(arr) {
    let sum = 0;
    // Fix: strict less than '<' operator
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of [10, 20, 30]:", sumArrayFixed([10, 20, 30]));
