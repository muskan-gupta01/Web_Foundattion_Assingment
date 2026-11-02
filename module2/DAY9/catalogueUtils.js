// Assignment 34: Catalogue Utility Functions

// 1. Get all products
function getAllProducts(catalogue) {
    return catalogue.products;
}

// 2. Find product by ID
function findProductById(catalogue, id) {
    return catalogue.products.find(function(product) {
        return product.id === id;
    });
}

// 3. Filter products by availability
function getAvailableProducts(catalogue) {
    return catalogue.products.filter(function(product) {
        return product.available === true;
    });
}

// 4. Calculate total catalogue value
function calculateTotalValue(catalogue) {
    return catalogue.products.reduce(function(total, product) {
        return total + product.price * product.quantity;
    }, 0);
}

// 5. Calculate total product count
function getProductCount(catalogue) {
    return catalogue.products.length;
}

// 6. Search product by name
function searchProduct(catalogue, name) {
    return catalogue.products.filter(function(product) {
        return product.name.toLowerCase().includes(name.toLowerCase());
    });
}

// Export functions
module.exports = {
    getAllProducts,
    findProductById,
    getAvailableProducts,
    calculateTotalValue,
    getProductCount,
    searchProduct
};