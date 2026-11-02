// Assignment 26: Array Methods

const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// 1. map() - Double each number
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled Numbers:", doubled);

// 2. filter() - Find numbers greater than 25
const filtered = numbers.filter(function(num) {
    return num > 25;
});
console.log("Numbers Greater Than 25:", filtered);

// 3. reduce() - Calculate total
const total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log("Sum of Numbers:", total);

// 4. find() - Find first number greater than 25
const found = numbers.find(function(num) {
    return num > 25;
});
console.log("First Number Greater Than 25:", found);

// 5. some() - Check if any number is greater than 45
const hasLargeNumber = numbers.some(function(num) {
    return num > 45;
});
console.log("Any Number Greater Than 45:", hasLargeNumber);

// 6. every() - Check if all numbers are positive
const allPositive = numbers.every(function(num) {
    return num > 0;
});
console.log("All Numbers Are Positive:", allPositive);

// 7. Convert names to uppercase
const names = ["muskan", "ansh", "ishika"];

const upperNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log("Uppercase Names:", upperNames);