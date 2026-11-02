// Assignment 22: Validation Utility Library

// 1. Check Empty Input
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string" && value.trim() === "") {
        return true;
    }

    return false;
}


// 2. Name Validation
function validateName(name) {

    // Guard Clause
    if (isEmpty(name)) {
        return "Name cannot be empty";
    }

    if (!/^[a-zA-Z ]+$/.test(name.trim())) {
        return "Name should contain only letters";
    }

    return "Valid Name";
}


// 3. Email Validation
function validateEmail(email) {

    if (isEmpty(email)) {
        return "Email cannot be empty";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
        return "Invalid Email Address";
    }

    return "Valid Email";
}


// 4. Phone Number Validation
function validatePhone(phone) {

    if (isEmpty(phone)) {
        return "Phone number cannot be empty";
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        return "Phone number must contain 10 digits";
    }

    return "Valid Phone Number";
}


// 5. Age Validation
function validateAge(age) {

    if (isEmpty(age)) {
        return "Age cannot be empty";
    }

    const ageNumber = Number(age);

    if (!Number.isInteger(ageNumber)) {
        return "Age must be a whole number";
    }

    if (ageNumber < 16 || ageNumber > 100) {
        return "Age must be between 16 and 100";
    }

    return "Valid Age";
}


// 6. Password Validation
function validatePassword(password) {

    if (isEmpty(password)) {
        return "Password cannot be empty";
    }

    if (password.length < 8) {
        return "Password must contain at least 8 characters";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain an uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must contain a lowercase letter";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain a number";
    }

    return "Valid Password";
}


// 7. Student Form Validation
function validateStudentForm(student) {

    if (!student || typeof student !== "object") {
        return ["Invalid student data"];
    }

    const errors = [];

    if (validateName(student.name) !== "Valid Name") {
        errors.push(validateName(student.name));
    }

    if (validateEmail(student.email) !== "Valid Email") {
        errors.push(validateEmail(student.email));
    }

    if (validateAge(student.age) !== "Valid Age") {
        errors.push(validateAge(student.age));
    }

    if (validatePhone(student.phone) !== "Valid Phone Number") {
        errors.push(validatePhone(student.phone));
    }

    if (validatePassword(student.password) !== "Valid Password") {
        errors.push(validatePassword(student.password));
    }

    return errors;
}


// Export all utility functions

module.exports = {
    isEmpty,
    validateName,
    validateEmail,
    validatePhone,
    validateAge,
    validatePassword,
    validateStudentForm
};