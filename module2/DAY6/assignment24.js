// Assignment 24: Practical Test Cases and Short Reflection

const validation = require("./validationUtils");

const calculations = require("./assignment23");


// Q1. Empty Input Testing

console.log("\nQ1. Empty Input Testing");

console.log(validation.isEmpty(""));
console.log(validation.isEmpty("Muskan"));
console.log(validation.isEmpty(null));


// Q2. Name Validation

console.log("\nQ2. Name Validation");

console.log(validation.validateName("Muskan Gupta"));
console.log(validation.validateName("Muskan123"));
console.log(validation.validateName(""));


// Q3. Email Validation

console.log("\nQ3. Email Validation");

console.log(validation.validateEmail("muskan@gmail.com"));
console.log(validation.validateEmail("invalid-email"));


// Q4. Phone Validation

console.log("\nQ4. Phone Validation");

console.log(validation.validatePhone("9876543210"));
console.log(validation.validatePhone("12345"));


// Q5. Age Validation

console.log("\nQ5. Age Validation");

console.log(validation.validateAge(20));
console.log(validation.validateAge(12));
console.log(validation.validateAge(150));


// Q6. Password Validation

console.log("\nQ6. Password Validation");

console.log(validation.validatePassword("Muskan123"));
console.log(validation.validatePassword("abc"));


// Q7. Student Form Testing

console.log("\nQ7. Student Form Testing");

const student = {
    name: "Muskan Gupta",
    email: "muskan@gmail.com",
    age: 20,
    phone: "9876543210",
    password: "Muskan123"
};

console.log(validation.validateStudentForm(student));


// Q8. Settings Merging

console.log("\nQ8. Settings Merging");

const defaultSettings = {
    theme: "light",
    language: "English"
};

const userSettings = {
    theme: "dark"
};

console.log(
    calculations.mergeSettings(defaultSettings, userSettings)
);


// Q9. Shopping Cart Total

console.log("\nQ9. Shopping Cart Total");

const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 500, quantity: 2 }
];

console.log("Total:", calculations.calculateTotal(cart));


// Q10. Discount Testing

console.log("\nQ10. Discount Testing");

console.log(calculations.calculateDiscount(1000, 10));
console.log(calculations.calculateDiscount(1000, 120));


// Q11. Tax Testing

console.log("\nQ11. Tax Testing");

console.log(calculations.calculateGrandTotal(1000, 18));
console.log(calculations.calculateGrandTotal(1000, -5));


// Q12. Most Expensive Product

console.log("\nQ12. Most Expensive Product");

console.log(calculations.findMostExpensive(cart));


// Q13. Empty Cart Testing

console.log("\nQ13. Empty Cart Testing");

console.log(calculations.calculateTotal([]));
console.log(calculations.findMostExpensive([]));


// Q14. Short Reflection

console.log("\nQ14. Short Reflection");

console.log("1. I learned about JavaScript scope and hoisting.");

console.log("2. I learned how to create reusable validation functions.");

console.log("3. I understood the use of guard clauses.");

console.log("4. I learned how to merge objects using the spread operator.");

console.log("5. I practiced array methods like reduce().");

console.log("6. I learned how to test functions using different inputs.");

