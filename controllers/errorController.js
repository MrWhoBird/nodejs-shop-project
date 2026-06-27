const display404 = (req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: 'Page Not Found ejs',
        path: '/*' 
    });
};

export default {display404};
