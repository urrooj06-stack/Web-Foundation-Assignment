
// Assignment 23: Merging settings and calculating totals

// 1. Merging objects cleanly with ES6 spread operator
const defaultSettings = { theme: 'light', notifications: true, betaFeatures: false };
const userPreferences = { theme: 'dark', betaFeatures: true };

const activeSettings = { ...defaultSettings, ...userPreferences };
console.log("Merged Application Settings:", activeSettings);

// 2. High-performance totals calculation using Array.reduce
const shoppingCart = [
    { id: 1, item: 'Keyboard', price: 2500, qty: 1 },
    { id: 2, item: 'Mouse', price: 800, qty: 2 }
];

const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
};
console.log("Total Cart Value (INR):", calculateTotal(shoppingCart));
