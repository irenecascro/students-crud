const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const dayjs = require('dayjs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const studentsRouter = require('./routes/students');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * MIDDLEWARES
 */

app.use((req, res, next) => {
  console.log('Fecha ', new Date().toLocaleDateString());
  req.fechaActual = new Date();
  // res.send('Respondo desde el middleware');
  next();
});

// Middleware que responda en función de un número aleatorio
app.use((req, res, next) => {
  const randomNum = Math.random();
  console.log(randomNum);
  if (randomNum > 0.99) {
    res.send('El número aleatorio es mayor de 0.6');
  } else {
    next();
  }
});

// TODO: Si la hora está entre las 18:00 y las 08:00 mantener cerrada la aplicación (no se puede acceder a ninguna ruta)
// dayjs
app.use((req, res, next) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  console.log(currentDate);
  console.log(hours);
  if (hours >= 8 && hours <= 18) {
    next();
  } else {
    res.send('La aplicación está cerrada');
  }
});

app.use((req, res, next) => {
  const currentDate = dayjs();
  const navidad = dayjs('2021-12-25');
  console.log(navidad.diff(currentDate, 'seconds'));
  next();
});
















// Middleware para registrar en un fichero los accesos a nuestra aplicación
app.use((req, res, next) => {

  const linea = `${new Date().toLocaleString()} - METHOD: ${req.method} - URL: ${req.url}\n`;
  const fileName = `./main.log`;

  fs.appendFile(fileName, linea, (err) => {
    if (err) {
      console.log(err);
      return res.send('Error al escribir en el fichero de LOG');
    }
    // la línea se ha escrito correctamente
    next();
  });
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/students', studentsRouter);

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