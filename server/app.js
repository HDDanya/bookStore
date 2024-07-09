const express = require('express');
require('@babel/register');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// вызов функции проверки соединения с базоый данных
dbCheck();

//routers
const basketRouter = require('./src/routers/basketRouter.js');
const bookRouter = require('./src/routers/bookRouter.js');
const userRouter = require('./src/routers/userRouter.js');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
// app.options('*', cors({ credentials: true, origin: 'http://localhost:80' }));
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', userRouter);
app.use('/api', bookRouter);
app.use('/api', basketRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
