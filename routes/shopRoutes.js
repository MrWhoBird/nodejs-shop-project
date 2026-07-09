import express from "express";
import adminController from '../controllers/adminController.js';

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
router.get('/', adminController.shopPage);

router.get('/cart', adminController.cartPage);

router.get('/products', adminController.productsPage);

export default router;
