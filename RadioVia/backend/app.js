var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'asñdkñlwknñlkncorenaldknc{ranlnvñaljnd',
  resave: false,
  saveUninitialized: true
}));

//var indexRouter = require('./routes/admin/login');
//app.use('/admin/login', indexRouter);

/* redirecionar al backend de forma directa */
app.get('/', function(req,res){
  res.redirect('/admin/login');
});


app.get('/admin/login', function(req,res){
  var conocido = Boolean(req.session.UserName); 

  res.render('admin/login', { 
    layout: 'admin/layout',  //login.hbs y layout.hbs
    title: 'Bienvenidos a Radiovia',
    conocido: conocido,
    UserName: req.session.UserName,
    UserPass: req.session.UserPass
  });
});

app.post('/admin/login/ingresar', function(req,res){
  if(req.body.UserName){
    req.session.UserName = req.body.UserName
  }
  if(req.body.UserPass){
    req.session.UserPass = req.body.UserPass
  }
  res.redirect('/admin/login');
});

app.get('/admin/login/salir', function(req,res){
  req.session.destroy();
  res.redirect('/admin/login');
});


/*

app.get('/', function(req,res){
  var conocido = Boolean(req.session.UserName);

  res.render('index',{ //index.hbs
    title: 'Bienvenidos a Radiovia',
    conocido: conocido,
    UserName: req.session.UserName
  });
});

app.get('/salir', function(req,res){
  req.session.destroy();
  res.redirect('/');
});

app.post('/ingresar', function(req,res){
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});

*/

/*
app.get('/', function(req,res){
  res.send ('Esta es la Pagina de ' + req.path + 'home');
})
app.get('/nosotros', function(req,res){
  res.send ('Esta es la Pagina de ' + req.path);
})
app.get('/servicios', function(req,res){
  res.send ('Esta es la Pagina de ' + req.path);
})
app.get('/contacto', function(req,res){
  res.send ('Esta es la Pagina de ' + req.path);
})
app.get('/agregarmedio', function(req,res){
  res.send ('Esta es la Pagina de ' + req.path);
})
*/


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

