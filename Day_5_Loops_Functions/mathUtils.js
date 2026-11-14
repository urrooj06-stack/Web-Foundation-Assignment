
// Assignment 20: Mathematical Utility Functions (Reusable Module)
const MathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b === 0 ? 'Error: Div by Zero' : a / b,
    
    // Using recursion (C-style logic applied in JS)
    factorial: function(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    }
};
console.log("MathUtils Testing:");
console.log("5! =", MathUtils.factorial(5));
console.log("10 / 2 =", MathUtils.divide(10, 2));
