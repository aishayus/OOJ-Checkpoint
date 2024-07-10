//Object Class for the products (id, name, price)
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Obejct Class for the shopping cart items (product, quantity)
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    //Method to calculate total price
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

//Object Class for the shopping cart that contains an array of shopping cart instances
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    //Total items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    //Add items
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    //Remove items
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    //Display cart items
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }

    getTotalCartPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}


//Test
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Smartphone', 500);

const cart = new ShoppingCart();

cart.addItem(product1, 2);
cart.addItem(product2, 3);
cart.displayCart();

console.log(`Total Items in Cart: ${cart.getTotalItems()}`);
console.log(`Total Cart Price: ${cart.getTotalCartPrice()}`);

cart.removeItem(1);
cart.displayCart();

console.log(`Total Items in Cart: ${cart.getTotalItems()}`);
console.log(`Total Cart Price: ${cart.getTotalCartPrice()}`);
