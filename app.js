var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = 3001;



// route registeration routers/Controllers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var portfolioRouter = require('./routes/portfolio');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing rules > and is handle by indexRouter object
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter); // uses the new about controller
app.use('/contact', contactRouter); // uses the new about controller
app.use('/portfolio', portfolioRouter); // uses the new about controller

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

// render express here
app.get('/',function(req,res,next){
  res.send("Express here!");
}); 

app.listen(port,() => console.log('Example app on ${port}'));

module.exports = app;
