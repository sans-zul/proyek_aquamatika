const express = require('express');
const router = express.Router();
const client = require('./../../models/connection');
const getMenu = require('./../../models/menu/getMenu');
const getDataSubmenu = require('./../../models/menu/getDataSubmenu');
const getDataMenu = require('./../../models/menu/getDataMenu');
const isSession = require('./../../controller/isSession');

router.get('/', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        getDataSubmenu().then(function (myDataSubmenu) {
            const alert = {
                message: req.flash('alertMessage'),
                status: req.flash('alertStatus')
            };
            res.render('aquamatika/submenu/index', {
                title: 'Submenu Management',
                sumber: '/../sistem',
                menu: myResult,
                submenu: myDataSubmenu,
                alert: alert
            });
        });
    });
});


router.get('/create', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        getDataMenu().then(function (myMenu) {
            const alert = {
                message: req.flash('alertMessage'),
                status: req.flash('alertStatus')
            };
            res.render('aquamatika/submenu/create', {
                title: 'Submenu Management',
                sumber: '/../sistem',
                menu: myResult,
                data: myMenu,
                alert: alert
            });
        });
    });
});

router.post('/create', (req, res, next) => {
    var cols = [req.body.menu, req.body.name, req.body.url, req.body.icon, req.body.active, new Date()];
    client.query('INSERT INTO users_sub_menu(menu_id, title, url, icon, is_active, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/submenu/create');
        }
        req.flash('alertMessage', 'Success Add New Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/submenu');
    });
});


router.get('/:id/edit', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        getDataMenu().then(function (myMenu) {
            const alert = {
                message: req.flash('alertMessage'),
                status: req.flash('alertStatus')
            };
            const id = req.params.id;
            client.query('SELECT * FROM users_sub_menu WHERE id=$1', [id], function (err, mySubmenu) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.render('aquamatika/submenu/edit', {
                    title: 'Menu Management',
                    sumber: '/../sistem',
                    menu: myResult,
                    data: myMenu,
                    dataEdit: mySubmenu.rows,
                    alert: alert
                });
            });
        });
    });
});

router.post('/:id/edit', (req, res, next) => {

    var cols = [req.body.menu, req.body.name, req.body.url, req.body.icon, req.body.active, new Date(), req.params.id];
    client.query('UPDATE users_sub_menu SET menu_id=$1, title=$2, url=$3, icon=$4, is_active=$5, created_at=$6 WHERE id=$7', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger')
            console.log("Error Saving : %s ", err);
            res.redirect(`/aquamatika/submenu/${req.params.id}/edit`);
        }
        req.flash('alertMessage', 'Success Edited Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/submenu');
    });
});

router.get('/:id/delete', (req, res, next) => {
    isSession(req, res, 1);
    var id = req.params.id;
    client.query('DELETE FROM users_sub_menu WHERE id=$1', [id], function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/submenu');
        }
        req.flash('alertMessage', 'Success Delete Submenu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/submenu');
    });
});

module.exports = router;