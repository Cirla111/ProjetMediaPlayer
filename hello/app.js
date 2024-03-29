var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

global.folder_playlist="./playlists"
//global.folder_musique="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/Musique";
//global.folder_images="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/images_app_web";
global.folder_musique="/home/damien/Musique";
global.folder_images="/home/damien/Images/images_app_web";
global.current_musique=["Lomepal","FLIP","01 - Palpal"];

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listenRouter = require('./routes/listen');
var getRouter= require('./routes/get');
var playlistRouter= require('./routes/playlist');

var app = express();

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
app.use('/playlist', playlistRouter);

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

module.exports = app;
