import Product from '../models/product.js';
import Cart from '../models/cart.js';

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

const addToCart = (req, res) => {
    const productId = req.body.productId;
    const product = Product.findById(productId);
    if (product) {
        // Here you would typically add the product to the user's cart in a database or session
        console.log(`Product added to cart: ${product.title}`);
        Cart.addProduct(productId, product.price); // Assuming you have a method to handle adding to cart
    } else {
        console.log(`Product with ID ${productId} not found.`);
    }
    res.redirect('/cart');
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

const getProductDetailPage = (req, res) => {
    // GET form fields are added to the URL as query parameters
    // e.g. /product-detail?productId=123.
    // query parameter would look like this:
    // const productId = req.query.productId;
    // route parameter:
    const productId = req.params.productId;
    const product = Product.findById(productId);
    res.render('shop/product-detail', {
        pageTitle: 'Product Detail ejs',
        product: product,
        path: '/product-detail'
    });
};


export default { getHomePage, getCartPage, addToCart, getProductListPage, getCheckoutPage, getProductDetailPage };
