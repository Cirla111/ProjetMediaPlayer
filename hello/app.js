var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listenRouter = require('./routes/listen');
var getRouter= require('./routes/get');

var app = express();

//Chemins des dossiers définis en global
global.FolderMusique="/home/damien/Musique";
global.FolderImages="/home/damien/Images/images_app_web";

//Musique en train d'être écoutée:
global.current_musique = get_random_song();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listen', listenRouter);
app.use('/get', getRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function get_random_song(){
  title="La thune.ogg";
  artist="Angèle";
  album="Brol";
  return [artist,album,title];
}

module.exports = app;
