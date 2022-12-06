const express = require('express');

const router = express.Router();
const login = require('../controller/login');
const { verifyFields } = require('../middlewares/login');

router.post('/', verifyFields, login.login);

module.exports = router; 