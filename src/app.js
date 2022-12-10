const express = require('express');

const login = require('./router/login');
const user = require('./router/user');
const category = require('./router/Category');
const post = require('./router/post');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/user', user);
app.use('/categories', category);
app.use('/post', post);

module.exports = app;
