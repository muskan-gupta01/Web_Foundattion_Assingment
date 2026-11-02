// Assignment 21: Scope and Hoisting Prediction Worksheet

// Q1. Global Scope

var studentName = "Muskan";

function displayStudent() {
    console.log("Student Name:", studentName);
}

displayStudent();

// Output: Student Name: Muskan
// Explanation: Global variables can be accessed anywhere
// in the program.


console.log("--------------------------------");


// Q2. Function Scope

function showMarks() {
    var marks = 90;
    console.log("Marks:", marks);
}

showMarks();

// Output: Marks: 90
// Explanation: Variables declared using var inside a
// function are accessible only inside that function.


console.log("--------------------------------");


// Q3. Block Scope

{
    let age = 20;
    const city = "Bareilly";

    console.log("Age:", age);
    console.log("City:", city);
}

// Output: Age: 20
// City: Bareilly
// Explanation: let and const are block-scoped variables.


console.log("--------------------------------");


// Q4. Difference between var, let and const

var course = "BCA";
course = "BCA Artificial Intelligence";

let semester = 1;
semester = 2;

const university = "Invertis University";

console.log("Course:", course);
console.log("Semester:", semester);
console.log("University:", university);

// Explanation:
// var and let variables can be reassigned.
// const variables cannot be reassigned.


console.log("--------------------------------");


// Q5. Variable Hoisting

console.log("Score:", score);

var score = 85;

// Output: Score: undefined
// Explanation: var declarations are hoisted and initialized
// with undefined.


console.log("--------------------------------");


// Q6. Accessing var before declaration

console.log("Result:", result);

var result = 95;

// Output: Result: undefined
// Explanation: var can be accessed before declaration
// because of hoisting.


console.log("--------------------------------");


// Q7. Accessing let before declaration

try {
    console.log(total);
} catch (error) {
    console.log("Error:", error.name);
}

let total = 500;

// Output: Error: ReferenceError
// Explanation: let variables remain in the Temporal Dead Zone
// until their declaration is initialized.


console.log("--------------------------------");


// Q8. Accessing const before declaration

try {
    console.log(price);
} catch (error) {
    console.log("Error:", error.name);
}

const price = 1000;

// Output: Error: ReferenceError
// Explanation: const variables also remain in the TDZ
// before initialization.


console.log("--------------------------------");


// Q9. Function Hoisting

greet();

function greet() {
    console.log("Welcome to JavaScript!");
}

// Output: Welcome to JavaScript!
// Explanation: Function declarations are hoisted,
// so they can be called before their definition.


console.log("--------------------------------");


// Q10. Function Declaration vs Function Expression

// Function Declaration

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

// Output: Addition: 30


// Function Expression

const multiply = function(a, b) {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));

// Output: Multiplication: 20

// Explanation:
// Function declarations can be called before their definition.
// Function expressions assigned to const or let cannot be
// accessed before initialization.


console.log("--------------------------------");


// Q11. Temporal Dead Zone (TDZ)

{
    // TDZ starts when the block scope begins.
    // It ends when the let variable is initialized.

    let message = "Hello JavaScript";

    console.log(message);
}

// Output: Hello JavaScript
// Explanation: A let variable cannot be accessed before
// its initialization inside its scope.


console.log("--------------------------------");


// Q12. Lexical Scope

function outerFunction() {
    let college = "Invertis University";

    function innerFunction() {
        console.log("College:", college);
    }

    innerFunction();
}

outerFunction();

// Output: College: Invertis University
// Explanation: An inner function can access variables
// declared in its outer function.