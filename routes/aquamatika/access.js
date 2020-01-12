const express = require('express');
const router = express.Router();
const client = require('./../../models/connection');
const getMenu = require('./../../models/menu/getMenu');
const getDataAccessMenu = require('./../../models/menu/getDataAccessMenu');
const isSession = require('./../../controller/isSession');

router.get('/', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        getDataAccessMenu().then(function (resultDataAccessMenu) {
            const alert = {
                message: req.flash('alertMessage'),
                status: req.flash('alertStatus')
            };
            res.render('aquamatika/access/index', {
                title: 'Access Menu',
                sumber: '/../sistem',
                menu: myResult,
                myData: resultDataAccessMenu,
                alert: alert
            });
        })
    });
});

router.get('/create', (req, res, next) => {
    isSession(req, res, 1);
    getMenu(1).then(function (myResult) {
        client.query('SELECT * FROM users_role', function (err, dataRole) {
            client.query('SELECT * FROM users_menu', function (err, dataMenu) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                const alert = {
                    message: req.flash('alertMessage'),
                    status: req.flash('alertStatus')
                };
                res.render('aquamatika/access/create', {
                    title: 'Access Menu',
                    sumber: '/../sistem',
                    menu: myResult,
                    role: dataRole.rows,
                    dataMenu: dataMenu.rows,
                    alert: alert
                });
            })
        });
    });
});

router.post('/create', (req, res, next) => {
    var cols = [req.body.role, req.body.menu, new Date()];
    client.query('INSERT INTO users_access_menu(users_role_id, users_menu_id, created_at) VALUES($1, $2, $3) RETURNING *', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/access/create');
        }
        req.flash('alertMessage', 'Success Add New Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/access');
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
        client.query('SELECT * FROM users_access_menu WHERE id=$1', [id], function (err, myMenu) {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }

            client.query('SELECT * FROM users_role', function (err, dataRole) {
                client.query('SELECT * FROM users_menu', function (err, dataMenu) {
                    res.render('aquamatika/access/edit', {
                        title: 'Access Menu',
                        sumber: '/../sistem',
                        menu: myResult,
                        data: myMenu.rows,
                        role: dataRole.rows,
                        dataMenu: dataMenu.rows,
                        alert: alert
                    });
                })
            });
        });
    });
});

router.post('/:id/edit', (req, res, next) => {

    var cols = [req.body.role, req.body.menu, new Date(), req.params.id];
    client.query('UPDATE users_access_menu SET users_role_id=$1, users_menu_id=$2, created_at=$3 WHERE id=$4', cols, function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger')
            console.log("Error Saving : %s ", err);
            res.redirect(`/aquamatika/access/${req.params.id}/edit`);
        }
        req.flash('alertMessage', 'Success Edited Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/access');
    });
});

router.get('/:id/delete', (req, res, next) => {
    isSession(req, res, 1);
    var id = req.params.id;
    client.query('DELETE FROM users_access_menu WHERE id=$1', [id], function (err, result) {
        if (err) {
            req.flash('alertMessage', err.message);
            req.flash('alertStatus', 'danger');
            console.log("Error Saving : %s ", err);
            res.redirect('/aquamatika/access');
        }
        req.flash('alertMessage', 'Success Delete Menu');
        req.flash('alertStatus', 'success');
        res.redirect('/aquamatika/access');
    });
});

module.exports = router;