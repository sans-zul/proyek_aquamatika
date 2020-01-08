const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('/auth/in');
});

router.get('/in', (req, res, next) => {
    res.render('login/index');
});

router.get('/up', (req, res, next) => {
    res.render('register/index');
});

router.post('/up', async (req, res) => {

})

module.exports = router;