const products = [];

class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        products.push(this);
    }

    // static makes fetchAll callable on the Product class itself,
    // without creating a new Product instance.
    static fetchAll() {
        return products;
    }
}

export default Product;
