const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/getMenu');

router.get('/', function (req, res, next) {
    getMenu(5).then(function (myResult) {
        res.render('wali/index', {
            title: 'Wali',
            menu: myResult
        });
    });
});

module.exports = router;