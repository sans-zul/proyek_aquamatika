const express = require('express');
const router = express.Router();
const client = require('./../../models/connection');
const getMenu = require('./../../models/menu/getMenu');
const getDataMenu = require('./../../models/menu/getDataMenu');
const isSession = require('./../../controller/isSession');

router.get('/', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        getDataMenu().then(function (resultDataMenu) {
            const alert = {
                message: req.flash('alertMessage'),
                status: req.flash('alertStatus')
            };
            res.render('aquamatika/menu/index', {
                title: 'Menu Management',
                sumber: '/../sistem',
                menu: myResult,
                myData: resultDataMenu,
                alert: alert
            });
        })
    });
});

router.get('/create', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        const alert = {
            message: req.flash('alertMessage'),
            status: req.flash('alertStatus')
        };
        res.render('aquamatika/menu/create', {
            title: 'Menu Management',
            sumber: '/../sistem',
            menu: myResult,
            alert: alert
        });
    });
});

router.post('/create', (req, res, next) => {
    var cols = [req.body.name, new Date()];
    client.query('INSERT INTO users_menu(menu, created_at) VALUES($1, $2) RETURNING *', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/menu/create');
        }
        req.flash('alertMessage', 'Success Add New Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/menu');
    });
});

router.get('/:id/edit', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        const alert = {
            message: req.flash('alertMessage'),
            status: req.flash('alertStatus')
        };
        const id = req.params.id;
        client.query('SELECT * FROM users_menu WHERE id=$1', [id], function (err, myMenu) {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.render('aquamatika/menu/edit', {
                title: 'Menu Management',
                sumber: '/../sistem',
                menu: myResult,
                data: myMenu.rows,
                alert: alert
            });
        });
    });
});

router.post('/:id/edit', (req, res, next) => {

    var cols = [req.body.name, new Date(), req.params.id];
    client.query('UPDATE users_menu SET menu=$1, created_at=$2 WHERE id=$3', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger')
            console.log("Error Saving : %s ", err);
            res.redirect(`/aquamatika/menu/${req.params.id}/edit`);
        }
        req.flash('alertMessage', 'Success Edited Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/menu');
    });
});

router.get('/:id/delete', (req, res, next) => {
    isSession(req, res, 1);
    var id = req.params.id;
    client.query('DELETE FROM users_menu WHERE id=$1', [id], function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/menu');
        }
        req.flash('alertMessage', 'Success Delete Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/menu');
    });
});

module.exports = router;