// Assignment 30 & 31: Nested Product Object and Cart Object
const ProductCatalog = {
    "P001": {
        name: "Mechanical Keyboard",
        specs: { switch: "Cherry MX Red", layout: "TKL", backlight: "RGB" },
        price: 4500,
        inStock: true
    }
};

class ShoppingCart {
    constructor() {
        this.items = new Map(); // Using Map for O(1) constant time lookups
    }
    
    addItem(productId, qty) {
        if (qty <= 0) throw new Error("Quantity must be positive");
        const product = ProductCatalog[productId];
        if (!product || !product.inStock) throw new Error("Product unavailable");
        
        const currentQty = this.items.get(productId)?.qty || 0;
        this.items.set(productId, { product, qty: currentQty + qty });
    }
    
    getCartTotal() {
        let total = 0;
        for (let {product, qty} of this.items.values()) {
            total += product.price * qty;
        }
        return total;
    }
}

const myCart = new ShoppingCart();
myCart.addItem("P001", 2);
console.log("Cart Total after adding 2 Keyboards:", myCart.getCartTotal());
