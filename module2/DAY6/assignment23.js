// Assignment 23: Utilities for Merging Settings and Calculating Totals


// Q1. Default Settings

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true,
    fontSize: 16
};

console.log("Default Settings:");
console.log(defaultSettings);


// Q2. User Settings

const userSettings = {
    theme: "dark",
    fontSize: 20
};

console.log("\nUser Settings:");
console.log(userSettings);


// Q3. Merge Default and User Settings

function mergeSettings(defaults, user) {
    return {
        ...defaults,
        ...user
    };
}

const finalSettings = mergeSettings(defaultSettings, userSettings);

console.log("\nMerged Settings:");
console.log(finalSettings);


// Q4. Calculate Total Price

const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 500, quantity: 2 },
    { product: "Keyboard", price: 1000, quantity: 1 }
];

function calculateTotal(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const totalPrice = calculateTotal(cart);

console.log("\nShopping Cart:");
console.log(cart);

console.log("Total Price:", totalPrice);


// Q5. Calculate Discount

function calculateDiscount(total, discountPercentage) {

    if (total < 0 || discountPercentage < 0 || discountPercentage > 100) {
        return "Invalid values";
    }

    const discount = total * discountPercentage / 100;

    return total - discount;
}

console.log("\nPrice After 10% Discount:");
console.log(calculateDiscount(totalPrice, 10));


// Q6. Calculate Grand Total with Tax

function calculateGrandTotal(total, taxPercentage) {

    if (total < 0 || taxPercentage < 0) {
        return "Invalid values";
    }

    const tax = total * taxPercentage / 100;

    return total + tax;
}

console.log("\nGrand Total with 18% Tax:");
console.log(calculateGrandTotal(totalPrice, 18));


// Q7. Find Most Expensive Product

function findMostExpensive(items) {

    if (!Array.isArray(items) || items.length === 0) {
        return "No products available";
    }

    return items.reduce((highest, current) => {
        return current.price > highest.price ? current : highest;
    });
}

console.log("\nMost Expensive Product:");
console.log(findMostExpensive(cart));


// Q8. Empty Cart Testing

const emptyCart = [];

console.log("\nEmpty Cart Total:");
console.log(calculateTotal(emptyCart));


// Q9. Final Shopping Summary

console.log("\n----- Shopping Summary -----");

console.log("Original Total:", totalPrice);
console.log("After Discount:", calculateDiscount(totalPrice, 10));
console.log("Final Amount with Tax:", calculateGrandTotal(totalPrice, 18));
module.exports = {
    mergeSettings,
    calculateTotal,
    calculateDiscount,
    calculateGrandTotal,
    findMostExpensive
};