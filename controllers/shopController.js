import Product from '../models/product.js';

const getHomePage = (req, res) => {
    const products = Product.fetchAll();
    //console.log('products fetched:', products);
    res.render('shop/home', {
        pageTitle: 'Shop ejs',
        products: products,
        path: '/'
    });
}

const getCartPage = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'Cart ejs',
        path: '/cart'
    });
};

const getCheckoutPage = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout ejs',
        path: '/checkout'
    });
};

const getProductListPage = (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        pageTitle: 'Products ejs',
        products: products,
        path: '/product-list'
    });
};

export default { getHomePage, getCartPage, getProductListPage, getCheckoutPage };
