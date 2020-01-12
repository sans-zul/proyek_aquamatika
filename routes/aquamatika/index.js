const express = require('express');
const router = express.Router();
const menu = require('./menu');
const submenu = require('./submenu');
const access = require('./access');
const getMenu = require('./../../models/menu/getMenu');
const isSession = require('./../../controller/isSession');

router.get('/', function (req, res, next) {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        res.render('aquamatika/index', {
            title: 'Dashboard',
            sumber: 'sistem',
            menu: myResult
        });
    });
});


router.use('/menu', menu);
router.use('/submenu', submenu);
router.use('/access', access);

module.exports = router;