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
    //console.log('dane:', req.body);
    //console.log('product:', product);
    //console.log('title:', product.title);
    res.redirect('/');
}



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

const checkoutPage = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout ejs',
        path: '/checkout'
    });
};

//export default { getAddProduct, postAddProduct, shopPage, data };
export default { getAddProduct, postAddProduct, productsPage, getEditProduct, postDeleteProduct, checkoutPage, data: Product.fetchAll() };