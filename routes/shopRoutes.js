import express from "express";
import adminController from '../controllers/adminController.js';
import shopController from '../controllers/shopController.js';

const router = express.Router();

// to handle the favicon.ico request and prevent it from being logged in the console
router.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    // next() is required to move to the next middleware, otherwise the request will be stuck here
    next();
});

// This routes handles GET requests to the root path "/".
router.get('/', shopController.shopPage);
router.get('/cart', shopController.cartPage);

router.get('/checkout', adminController.checkoutPage);
router.get('/product-list', adminController.productsPage);

export default router;
