const display404 = (req, res, next) => {
    res.status(404).render('error/404', {
        pageTitle: 'Page Not Found ejs',
        // this path is used to highlight the active link in the navigation bar
        // since this is a 404 page, we can set it to '/404' or any other value that does not match any of the existing routes
        path: '/404'
    });
};

export default { display404 };
