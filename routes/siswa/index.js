const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/menu/getMenu');
const isSession = require('./../../controller/isSession');

router.get('/', function (req, res, next) {
    isSession(req, res, 4);
    getMenu(4).then(function (myResult) {
        res.render('siswa/index', {
            title: 'Siswa',
            sumber: 'sistem',
            menu: myResult
        });
    });
});

module.exports = router;