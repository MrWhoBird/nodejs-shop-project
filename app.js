import express from "express";
import path from 'path';
//import { fileURLToPath } from 'url';
import rootDir from './util/path.js';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const viewsPath = path.join(__dirname, 'views');


import adminRoutes from './routes/adminRoutes.js';
import shopRoutes from './routes/shopRoutes.js';

import bodyParser from 'body-parser';

const app = express();

// to parse the body of the request and make it available in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// handle all other requests that are not handled by the above route
app.use((req, res) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    //res.status(404).sendFile("404.html", { root: viewsPath });
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);