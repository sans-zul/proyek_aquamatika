const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/getMenu');

router.get('/', function (req, res, next) {
    getMenu(4).then(function (myResult) {
        res.render('siswa/index', {
            title: 'Siswa',
            menu: myResult
        });
    });
});

module.exports = router;