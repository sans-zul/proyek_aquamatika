const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const landing_page = require('./routes/index');
const auth = require('./routes/auth');
const aquamatika = require('./routes/aquamatika');
const admin = require('./routes/admin');
const tentor = require('./routes/tentor');
const siswa = require('./routes/siswa');
const wali = require('./routes/wali');

const client = require('./models/connection');
client.connect();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', landing_page);
app.use('/auth', auth);
app.use('/aquamatika', aquamatika);
app.use('/admin', admin);
app.use('/tentor', tentor);
app.use('/siswa', siswa);
app.use('/wali', wali);
// app.get('*', function (req, res) {
//   res.redirect('/');
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;