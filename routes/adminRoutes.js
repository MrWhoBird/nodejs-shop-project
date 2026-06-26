import express from 'express';
import path from 'path';
//import { fileURLToPath } from 'url';
import rootDir from '../util/path.js';
import adminController from '../controllers/adminController.js';

const router = express.Router();
// const data = [];
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const viewsPath = path.join(__dirname, '..', 'views');

// more specific middleware should be defined before the more general ones
// otherwise the more general ones will catch the request first and the more specific ones will never be reached
router.get('/add-product', adminController.getAddProduct);

// router.get('/add-product', (req, res) => {
//     //res.sendFile(path.join(viewsPath, 'add-product.html'));
//     //res.sendFile("add-product.html", { root: viewsPath });
//     //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//     res.render('add-product', { 
//         pageTitle: 'Add Product ejs',
//         path: '/admin/add-product'
//     });
// });

router.post('/add-product', adminController.postAddProduct);

export default router;
// export { data };