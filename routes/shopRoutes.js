import express from "express";
import path from 'path';
//import { fileURLToPath } from 'url';
import rootDir from '../util/path.js';
// import { data } from './adminRoutes.js';
import adminController from '../controllers/adminController.js';

const router = express.Router();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const viewsPath = path.join(__dirname, '..', 'views');


// to handle the favicon.ico request and prevent it from being logged in the console
router.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    // required to move to the next middleware, otherwise the request will be stuck here
    next();
});

// This route handles GET requests to the root path "/".
router.get('/', adminController.shopPage);

export default router;
