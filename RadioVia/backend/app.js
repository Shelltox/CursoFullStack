var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');



/*
app.use();
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
*/
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

/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
*/


app.get('/', function(req,res){
  var conocido = Boolean(req.session.nombre);

  res.render('index',{ //index.hbs
    title: 'Bienvenidos a Radiovia BackEnd Login',
    conocido: conocido,
    nombre: req.session.nombre
  });
  
app.post('/ingresar',function(req,res){
  if(req.session.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});


});
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
