require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const { PAGE_URL } = require('./config');
const loginRouter = require('./controllers/login');
const todosRouter = require('./controllers/contact');
const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const contactRouter = require('./controllers/contact');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);
    console.log('Conecto a MongoDB');
  } catch (error) {
    console.log('No conecto a MongoDB');
    console.log(error);
  }

})();

app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', express.static(path.resolve(__dirname, 'dist')));
app.use('/login', express.static(path.resolve(__dirname, 'dist', 'login')));
app.use('/signup', express.static(path.resolve(__dirname, 'dist', 'signup')));
app.use('/contact', express.static(path.resolve(__dirname, 'dist', 'contact')));
app.use('/verify/:id/:token', express.static(path.resolve(__dirname, 'dist', 'verify')));


app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/todos', userExtractor, contactRouter);



app.use(morgan('tiny'));

module.exports = app;