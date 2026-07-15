import express from "express";
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

router.get('/', shopController.getHomePage);
router.get('/cart', shopController.getCartPage);
router.post('/cart', shopController.addToCart);
router.get('/checkout', shopController.getCheckoutPage);
router.get('/product-list', shopController.getProductListPage);
router.get('/product-detail/:productId', shopController.getProductDetailPage);

export default router;
