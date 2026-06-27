import express from "express";
import './server/config/dotenv.js';

import adminRoutes from './routes/adminRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import utilRoutes from './routes/utilRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});

// define the view engine and the views folder
app.set('views', 'views');
app.set('view engine', 'ejs');

// parse the body of the request and make it available in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// admin routes will be prefixed with /admin
app.use('/admin', adminRoutes);

// shop routes for standard user
app.use(shopRoutes);

// handle all other requests that are not handled by the above route
app.use(utilRoutes);