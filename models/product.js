const products = [];

class Product {
    constructor(title) {
        this.title = title;
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
