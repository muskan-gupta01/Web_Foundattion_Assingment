// Assignment 25: Array Operations

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:");
console.log(fruits);

// Add an element
fruits.push("Grapes");
console.log("\nAfter Push:");
console.log(fruits);

// Remove last element
fruits.pop();
console.log("\nAfter Pop:");
console.log(fruits);

// Add element at beginning
fruits.unshift("Pineapple");
console.log("\nAfter Unshift:");
console.log(fruits);

// Remove first element
fruits.shift();
console.log("\nAfter Shift:");
console.log(fruits);

// Access array elements
console.log("\nFirst Fruit:", fruits[0]);
console.log("Array Length:", fruits.length);

// Search an element
console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Includes Apple:", fruits.includes("Apple"));

// Loop through array
console.log("\nAll Fruits:");

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Sort array
console.log("\nSorted Array:");
console.log([...fruits].sort());

// Reverse array
console.log("\nReversed Array:");
console.log([...fruits].reverse());