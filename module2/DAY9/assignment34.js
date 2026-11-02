// Assignment 34: Catalogue Utilities and Test Scenarios

const fs = require("fs");
const utils = require("./catalogueUtils");

const catalogue = JSON.parse(
    fs.readFileSync("module2/DAY9/catalogue.json", "utf8")
);

// Test 1: Get all products
console.log("\nTEST 1: Get All Products");
console.log(utils.getAllProducts(catalogue));

// Test 2: Find product by ID
console.log("\nTEST 2: Find Product by ID");
console.log(utils.findProductById(catalogue, 101));

// Test 3: Find unavailable product
console.log("\nTEST 3: Find Unavailable Product");
console.log(utils.findProductById(catalogue, 104));

// Test 4: Filter available products
console.log("\nTEST 4: Available Products");
console.log(utils.getAvailableProducts(catalogue));

// Test 5: Calculate total value
console.log("\nTEST 5: Total Catalogue Value");
console.log(utils.calculateTotalValue(catalogue));

// Test 6: Product count
console.log("\nTEST 6: Total Product Count");
console.log(utils.getProductCount(catalogue));

// Test 7: Search product
console.log("\nTEST 7: Search Product");
console.log(utils.searchProduct(catalogue, "Laptop"));

// Test 8: Search unavailable product name
console.log("\nTEST 8: Search Missing Product");
console.log(utils.searchProduct(catalogue, "Mobile"));

// Test 9: Invalid product ID
console.log("\nTEST 9: Invalid Product ID");
console.log(utils.findProductById(catalogue, 999));