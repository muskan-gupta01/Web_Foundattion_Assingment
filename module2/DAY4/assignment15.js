// Student Profile using different data types

let studentName = "Muskan Gupta";       // String
let age = 19;                           // Number
let course = "BCA (Artificial Intelligence)"; // String
let percentage = 88.80;                 // Number
let isEnrolled = true;                  // Boolean
let subjects = ["Python", "JavaScript", "Machine Learning"]; // Array

let address = {
    city: "Bareilly",
    state: "Uttar Pradesh"
}; // Object

// Display student information

console.log("----- Student Profile -----");
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");
console.log("Enrolled:", isEnrolled);
console.log("Subjects:", subjects);
console.log("City:", address.city);
console.log("State:", address.state);

// Display data types

console.log("\n----- Data Types -----");
console.log("Name:", typeof studentName);
console.log("Age:", typeof age);
console.log("Percentage:", typeof percentage);
console.log("Enrolled:", typeof isEnrolled);
console.log("Subjects:", typeof subjects);
console.log("Address:", typeof address);
