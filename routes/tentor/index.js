const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/getMenu');

router.get('/', function (req, res, next) {
    getMenu(3).then(function (myResult) {
        res.render('tentor/index', {
            title: 'Tentor',
            menu: myResult
        });
    });
});

module.exports = router;