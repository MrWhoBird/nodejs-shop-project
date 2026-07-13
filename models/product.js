import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsFilePath = path.join(__dirname, '..', 'data', 'products.json');

const getProductsFromFile = () => {
    try {
        const fileContent = fs.readFileSync(productsFilePath);
        return JSON.parse(fileContent);
    } catch (err) {
        return [];
    }
};

class Product {
    constructor(title, pictureUrl, price, description) {
        this.id = Date.now().toString();
        this.title = title;
        this.pictureUrl = pictureUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        // arrow function is used here to preserve the context of 'this' inside the callback function
        const products = getProductsFromFile();
        products.push(this);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
    }

    // static makes fetchAll callable on the Product class itself,
    // without creating a new Product instance.
    static fetchAll() {
        return getProductsFromFile();
    }

    static deleteById(id) {
        const products = getProductsFromFile();
        const updatedProducts = products.filter(product => product.id !== id);
        fs.writeFileSync(productsFilePath, JSON.stringify(updatedProducts));
    }

    static findById(id) {
        const products = getProductsFromFile();
        return products.find(product => product.id === id);
    }
}

export default Product;
