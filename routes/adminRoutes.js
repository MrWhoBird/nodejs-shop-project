import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

// more specific middleware should be defined before the more general ones
// otherwise the more general ones will catch the request first and the more specific ones will never be reached

// This route handles requests to the path prefixed with "/admin"
router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product', adminController.getEditProduct);
router.post('/delete-product', adminController.postDeleteProduct);

export default router;
