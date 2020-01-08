const landing_page = require('express').Router();

landing_page.get('/', (req, res) => {
    res.render('main/index');
});

module.exports = landing_page;