// Assignment 22: Testing Validation Utility Library

const {
    isEmpty,
    validateName,
    validateEmail,
    validatePhone,
    validateAge,
    validatePassword,
    validateStudentForm
} = require("./validationUtils");


// 1. Empty Input Testing

console.log("1. Empty Input Testing");

console.log(isEmpty(""));
console.log(isEmpty("Muskan"));
console.log(isEmpty(null));


// 2. Name Testing

console.log("\n2. Name Validation");

console.log(validateName("Muskan Gupta"));
console.log(validateName(""));
console.log(validateName("Muskan123"));


// 3. Email Testing

console.log("\n3. Email Validation");

console.log(validateEmail("muskan@gmail.com"));
console.log(validateEmail("muskan@gmail"));


// 4. Phone Testing

console.log("\n4. Phone Validation");

console.log(validatePhone("9876543210"));
console.log(validatePhone("12345"));


// 5. Age Testing

console.log("\n5. Age Validation");

console.log(validateAge(20));
console.log(validateAge(12));
console.log(validateAge(150));


// 6. Password Testing

console.log("\n6. Password Validation");

console.log(validatePassword("Muskan123"));
console.log(validatePassword("muskan"));


// 7. Complete Student Form Testing

console.log("\n7. Student Form Validation");

const student = {
    name: "Muskan Gupta",
    email: "muskan@gmail.com",
    age: 20,
    phone: "9876543210",
    password: "Muskan123"
};

const errors = validateStudentForm(student);

if (errors.length === 0) {
    console.log("Student Form Submitted Successfully!");
} else {
    console.log("Form Validation Failed:");
    console.log(errors);
}


// 8. Invalid Student Form Testing

console.log("\n8. Invalid Student Form");

const invalidStudent = {
    name: "",
    email: "invalid-email",
    age: 12,
    phone: "12345",
    password: "abc"
};

console.log(validateStudentForm(invalidStudent));