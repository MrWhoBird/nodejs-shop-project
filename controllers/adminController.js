// const data = [];
import Product from '../models/product.js';

const getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product ejs',
        path: '/admin/add-product'
    });
};

const postAddProduct = (req, res) => {
    const product = new Product(
        req.body.title,
        req.body.pictureUrl,
        req.body.price,
        req.body.description
    );
    product.save();
    console.log('dane:', req.body);
    console.log('product:', product);
    console.log('title:', product.title);
    // dont need this anymore 
    // since we are using the Product class to store the data?
    // data.push({
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description
    // });
    res.redirect('/');
}

const shopPage = (req, res) => {
    //console.log(data);
    const products = Product.fetchAll();
    console.log('products fetched:', products);
    res.render('shop/index', {
        pageTitle: 'Shop ejs',
        //products: data,
        //products: Product.fetchAll(),
        products: products,
        path: '/'
    });
    console.log('In the middleware!');
}

const cartPage = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'Cart ejs',
        path: '/cart'
    });
};

const productsPage = (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        pageTitle: 'Products ejs',
        products: products,
        path: '/products'
    });
};

const getEditProduct = (req, res) => {
    const products = Product.fetchAll();
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product ejs',
        products: products,
        path: '/admin/edit-product'
    });
};

const postDeleteProduct = (req, res) => {
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/edit-product');
};
//export default { getAddProduct, postAddProduct, shopPage, data };
export default { getAddProduct, postAddProduct, shopPage, cartPage, productsPage, getEditProduct, postDeleteProduct, data: Product.fetchAll() };