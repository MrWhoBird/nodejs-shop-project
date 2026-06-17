import express from "express";
import path from 'path';
//import { fileURLToPath } from 'url';
import rootDir from '../util/path.js';

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
router.get('/', (req, res) => {
    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile("shop.html", { root: viewsPath });
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    console.log('In the middleware!');
});

export default router;
