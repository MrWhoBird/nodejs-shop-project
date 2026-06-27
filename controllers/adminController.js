// const data = [];
import Product from '../models/product.js';

const getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product ejs',
        path: '/admin/add-product'
    });
};

const postAddProduct = (req, res) => {
    const product = new Product(
        req.body.title,
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
    res.render('shop', {
        pageTitle: 'Shop ejs',
        //products: data,
        //products: Product.fetchAll(),
        products: products,
        path: '/'
    });
    console.log('In the middleware!');
}

//export default { getAddProduct, postAddProduct, shopPage, data };
export default { getAddProduct, postAddProduct, shopPage, data: Product.fetchAll() };