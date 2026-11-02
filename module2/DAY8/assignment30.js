// Assignment 31: Shopping Cart Object

const cart = {
    items: [],

    addItem: function(name, price, quantity) {
        if (!name || price <= 0 || quantity <= 0) {
            console.log("Invalid product details!");
            return;
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });

        console.log(name + " added to cart.");
    },

    calculateTotal: function() {
        return this.items.reduce(function(total, item) {
            return total + item.price * item.quantity;
        }, 0);
    },

    updateQuantity: function(name, quantity) {
        const item = this.items.find(function(product) {
            return product.name === name;
        });

        if (!item || quantity <= 0) {
            console.log("Invalid product or quantity!");
            return;
        }

        item.quantity = quantity;
        console.log("Quantity updated successfully.");
    },

    removeItem: function(name) {
        this.items = this.items.filter(function(item) {
            return item.name !== name;
        });

        console.log(name + " removed from cart.");
    },

    displayCart: function() {
        console.log("\nShopping Cart:");

        this.items.forEach(function(item) {
            console.log(
                item.name,
                "| Price:", item.price,
                "| Quantity:", item.quantity,
                "| Total:", item.price * item.quantity
            );
        });

        console.log("Grand Total:", this.calculateTotal());
    }
};

// Add products
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 1);

// Display cart
cart.displayCart();

// Update quantity
cart.updateQuantity("Mouse", 3);

// Display updated cart
cart.displayCart();

// Remove product
cart.removeItem("Keyboard");

// Final cart
cart.displayCart();

// Test invalid quantity
cart.addItem("Monitor", 10000, 0);