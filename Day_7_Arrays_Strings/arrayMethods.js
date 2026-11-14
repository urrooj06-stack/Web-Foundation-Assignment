// Assignment 25 & 26: Shopping List & Data Transformation
const dataset = [
    { id: 1, name: "Laptop", price: 65000, category: "Electronics", stock: 15 },
    { id: 2, name: "Mouse", price: 800, category: "Electronics", stock: 50 },
    { id: 3, name: "Notebook", price: 150, category: "Stationery", stock: 100 }
];

// Functional pipeline to filter and summarize (O(N) complexity)
// Using map/filter/reduce instead of traditional loops for cleaner, declarative code
const electronicsSummary = dataset
    .filter(item => item.category === "Electronics")
    .map(item => ({ product: item.name, totalValue: item.price * item.stock }))
    .reduce((acc, curr) => acc + curr.totalValue, 0);

console.log("Total Value of Electronics in Stock (INR):", electronicsSummary);
