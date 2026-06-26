import express from "express";
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
//import { fileURLToPath } from 'url';
import rootDir from './util/path.js';
import connect from './server/config/connect.js';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const viewsPath = path.join(__dirname, 'views');


import adminRoutes from './routes/adminRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import errorController from './controllers/errorController.js';

import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});

//app.use(ejsLayouts);
//app.set('layout', '../views/layouts/main.ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');

// to parse the body of the request and make it available in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// handle all other requests that are not handled by the above route
app.use(errorController.display404
    //res.status(404).send('<h1>Page Not Found</h1>');
    //res.status(404).sendFile("404.html", { root: viewsPath });
    //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    // res.status(404).render('404', { pageTitle: 'Page Not Found ejs' });
);