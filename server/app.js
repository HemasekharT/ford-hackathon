var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
var mysql = require('mysql');
var express = require('express');
var app = express();

// Set up connection to database.
var connection = mysql.createConnection({
  host: 'usesumosqldbpre01.database.windows.net',
  user: 'htirumal@ford.com',
  password: 'Sek_hem@052019',
  database: 'sumo-dev',
});

// Connect to database.
connection.connect();

// Listen to POST requests to /users.
app.post('/users', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  connection.query('select count(*) from sumo_billing', user, function(err, result) {

    var count = result.get("count");
    alert(count);

  });
  res.end('Success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
