const data = [];

const getAddProduct = (req, res) => {
    //res.sendFile(path.join(viewsPath, 'add-product.html'));
    //res.sendFile("add-product.html", { root: viewsPath });
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { 
        pageTitle: 'Add Product ejs',
        path: '/admin/add-product'
    });
};

const postAddProduct = (req, res) => {
    console.log(req.body);
    // dont need this anymore 
    // since we are using the Product class to store the data?
    data.push({ 
        title: req.body.title, 
        price: req.body.price, 
        description: req.body.description
    });
    res.redirect('/');
}

const shopPage = (req, res) => {
    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile("shop.html", { root: viewsPath });
    console.log(data);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { 
        pageTitle: 'Shop ejs',
        products: data,
        path: '/'
    });
    console.log('In the middleware!');
}

export default {getAddProduct, postAddProduct, shopPage, data};