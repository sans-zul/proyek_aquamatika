const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/menu/getMenu');
const isSession = require('./../../controller/isSession');

router.get('/', function (req, res, next) {
    isSession(req, res, 3);
    getMenu(3).then(function (myResult) {
        res.render('tentor/index', {
            title: 'Tentor',
            sumber: 'sistem',
            menu: myResult
        });
    });
});

module.exports = router;