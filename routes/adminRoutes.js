import express from 'express';
import path from 'path';
//import { fileURLToPath } from 'url';
import rootDir from '../util/path.js';

const router = express.Router();
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const viewsPath = path.join(__dirname, '..', 'views');

// more specific middleware should be defined before the more general ones
// otherwise the more general ones will catch the request first and the more specific ones will never be reached
router.get('/add-product', (req, res) => {
    //res.sendFile(path.join(viewsPath, 'add-product.html'));
    //res.sendFile("add-product.html", { root: viewsPath });
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

export default router;