import Product from '../models/product.js';

const shopPage = (req, res) => {
    const products = Product.fetchAll();
    //console.log('products fetched:', products);
    res.render('shop/home', {
        pageTitle: 'Shop ejs',
        products: products,
        path: '/'
    });
    //console.log('In the middleware!');
}

const cartPage = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'Cart ejs',
        path: '/cart'
    });
};

export default {shopPage, cartPage};
