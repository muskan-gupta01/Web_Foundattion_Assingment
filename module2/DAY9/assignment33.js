// Assignment 33: Create and Validate JSON Catalogue

const fs = require("fs");

// Read JSON file
const data = fs.readFileSync("module2/DAY9/catalogue.json", "utf8");

// Parse JSON
const catalogue = JSON.parse(data);

// Display catalogue
console.log("STORE NAME:", catalogue.storeName);
console.log("CATEGORY:", catalogue.category);

// Validate catalogue
function validateCatalogue(catalogue) {

    if (!catalogue.storeName || !catalogue.category) {
        return false;
    }

    if (!Array.isArray(catalogue.products)) {
        return false;
    }

    for (let product of catalogue.products) {

        if (
            !product.id ||
            !product.name ||
            !product.brand ||
            typeof product.price !== "number" ||
            product.price <= 0 ||
            typeof product.quantity !== "number" ||
            product.quantity < 0 ||
            typeof product.available !== "boolean"
        ) {
            return false;
        }
    }

    return true;
}

// Display validation result
console.log("\nCatalogue Validation:");

if (validateCatalogue(catalogue)) {
    console.log("Catalogue is valid!");
} else {
    console.log("Catalogue is invalid!");
}

// Display all products
console.log("\nPRODUCT DETAILS:");

catalogue.products.forEach(function(product) {
    console.log("----------------------");
    console.log("ID:", product.id);
    console.log("Name:", product.name);
    console.log("Brand:", product.brand);
    console.log("Price:", product.price);
    console.log("Quantity:", product.quantity);
    console.log("Available:", product.available);
});

// Count products
console.log("\nTotal Products:", catalogue.products.length);

// Find available products
const availableProducts = catalogue.products.filter(function(product) {
    return product.available;
});

console.log("Available Products:", availableProducts.length);

// Calculate total catalogue value
const totalValue = catalogue.products.reduce(function(total, product) {
    return total + product.price * product.quantity;
}, 0);

console.log("Total Catalogue Value:", totalValue);