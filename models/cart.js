import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsFilePath = path.join(__dirname, '..', 'data', 'cart.json');

class Cart {
    static addProduct(productId, productPrice) {
        // Fetch the previous cart
        let cart = { products: [], totalPrice: 0 };
        fs.readFile(productsFilePath, (err, fileContent) => {
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // Find existing product in the cart
            const existingProductIndex = cart.products.findIndex(prod => prod.id === productId);
            const existingProduct = cart.products[existingProductIndex];

            if (existingProduct) {
                // Update quantity and price
                existingProduct.qty += 1;
                existingProduct.price += productPrice;
            } else {
                // Add new product to the cart
                const newProduct = { id: productId, qty: 1, price: productPrice };
                cart.products.push(newProduct);
            }

            // Update total price
            cart.totalPrice += +productPrice;

            // Save the updated cart back to the session or database
            fs.writeFile(productsFilePath, JSON.stringify(cart), (err) => {
                if (err) {
                    console.log('Error writing to cart file:', err);
                }
            });
        });
    }

    // static deleteProduct(productId, productPrice) {
    //     // Fetch the previous cart
    //     let cart = { products: [], totalPrice: 0 };
    //     // Check if the cart already exists in the session or database
    //     // If it does, load it into the 'cart' variable

    //     // Find existing product in the cart
    //     const existingProductIndex = cart.products.findIndex(prod => prod.id === productId);
    //     const existingProduct = cart.products[existingProductIndex];

    //     if (!existingProduct) {
    //         return; // Product not found in the cart
    //     }

    //     // Update total price and remove product from cart
    //     cart.totalPrice -= existingProduct.price;
    //     cart.products.splice(existingProductIndex, 1);

    //     // Save the updated cart back to the session or database
    // }
}

export default Cart;
