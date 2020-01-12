const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/menu/getMenu');
const isSession = require('./../../controller/isSession');

router.get('/', function (req, res, next) {
    isSession(req, res, 5);
    getMenu(5).then(function (myResult) {
        res.render('wali/index', {
            title: 'Wali',
            sumber: 'sistem',
            menu: myResult
        });
    });
});

module.exports = router;