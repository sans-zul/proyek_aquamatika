const express = require('express');
const router = express.Router();
const getUsers = require('./../../models/getUsers');

function check(role_id, res) {
    switch (role_id) {
        case 1: {
            res.redirect('/aquamatika');
            break;
        }
        case 2: {
            res.redirect('/admin');
            break;
        }
        case 3: {
            res.redirect('/tentor');
            break;
        }
        case 4: {
            res.redirect('/siswa');
            break;
        }
        case 5: {
            res.redirect('/wali');
            break;
        }
    }
}

router.get('/', (req, res, next) => {
    check(req.session.role_id, res);
    res.redirect('/auth/in');
});

router.get('/in', (req, res, next) => {
    check(req.session.role_id, res);
    const alert = {
        message: req.flash('alertMessage'),
        status: req.flash('alertStatus')
    };
    res.render('login/index', {
        alert: alert
    });
});

router.post('/in', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    var remember = 0;
    if (req.body.remember == 'on') {
        remember = 1;
    }

    getUsers().then(function (users) {
        var status = [];
        for (let i = 0; i < users.length; i++) {
            if ((users[i].email == email) && (users[i].password == password)) {
                status = new Array();
                status.push({
                    id: users[i].id,
                    name: users[i].name,
                    my_id: users[i].my_id,
                    email: users[i].email,
                    password: users[i].password,
                    image: users[i].image,
                    role_id: users[i].role_id,
                    is_active: users[i].is_active,
                    date: users[i].created_at
                });
                break;
            } else {
                status = new Array();
                status.push({
                    role_id: 0
                });
            }
        }
        if (!(status[0].role_id == 0)) {
            var sess = req.session;
            sess.id = status[0].id;
            sess.name = status[0].name;
            sess.my_id = status[0].my_id;
            sess.email = status[0].email;
            sess.password = status[0].password;
            sess.image = status[0].image;
            sess.role_id = status[0].role_id;
            sess.is_active = status[0].is_active;
            sess.date = status[0].date;
            sess.isLogin = 'lewat';
        }
        switch (sess.role_id) {
            case 0: {
                req.flash('alertMessage', 'Tidak Ada Access');
                req.flash('alertStatus', 'danger');
                res.redirect('/auth');
                break;
            }
            default: {
                check(sess.role_id, res);
            }
        }
    });
});

router.get('/up', (req, res, next) => {
    check(req.session.role_id, res);
    res.render('register/index');
});

router.post('/up', (req, res) => {

});

router.get('/out', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    })
});

module.exports = router;