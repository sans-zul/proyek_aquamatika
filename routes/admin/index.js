const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/getMenu');

router.get('/', (req, res, next) => {
    getMenu(2).then(function (myResult) {
        res.render('admin/index', {
            title: 'Admin',
            menu: myResult
        });
    });
});

module.exports = router;