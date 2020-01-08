const express = require('express');
const router = express.Router();
const getMenu = require('./../../models/getMenu');

router.get('/', function (req, res, next) {
    getMenu(1).then(function (myResult) {
        res.render('aquamatika/index', {
            title: 'Aquamatika',
            menu: myResult
        });
    });
});

module.exports = router;