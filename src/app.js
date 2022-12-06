const express = require('express');

// ...
const login = require('./router/login');
const user = require('./router/user');

const app = express();

app.use(express.json());

// ...
app.use('/login', login);
app.use('/user', user);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
