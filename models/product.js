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
    constructor(title, price, description) {
        this.title = title;
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
}

export default Product;
