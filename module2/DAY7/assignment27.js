// Assignment 27: String Operations

let text = "JavaScript is Easy to Learn";

console.log("Original String:", text);

// 1. String Length
console.log("Length:", text.length);

// 2. Convert to Uppercase
console.log("Uppercase:", text.toUpperCase());

// 3. Convert to Lowercase
console.log("Lowercase:", text.toLowerCase());

// 4. Find a word
console.log("Includes JavaScript:", text.includes("JavaScript"));

// 5. Find position
console.log("Index of Easy:", text.indexOf("Easy"));

// 6. Extract part of string
console.log("Slice:", text.slice(0, 10));

// 7. Replace a word
console.log("Replace:", text.replace("Easy", "Fun"));

// 8. Remove extra spaces
let name = "   Muskan Gupta   ";
console.log("Trim:", name.trim());

// 9. Split string into array
let sentence = "HTML,CSS,JavaScript,Python";
console.log("Split:", sentence.split(","));

// 10. Check starting and ending words
console.log("Starts With JavaScript:", text.startsWith("JavaScript"));
console.log("Ends With Learn:", text.endsWith("Learn"));

// 11. Repeat string
console.log("Repeat:", "Hello ".repeat(3));

// 12. Concatenation
let firstName = "Muskan";
let lastName = "Gupta";
console.log("Full Name:", firstName.concat(" ", lastName));