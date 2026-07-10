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
    // console.log('dane:', req.body);
    // console.log('product:', product);
    res.redirect('/admin/edit-product');
}

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

export default { getAddProduct, postAddProduct, getEditProduct, postDeleteProduct, data: Product.fetchAll() };