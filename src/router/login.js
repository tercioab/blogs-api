const express = require('express');

const router = express.Router();
const login = require('../controller/login');
const { verifyFields, validateFields } = require('../middlewares/login');

router.post('/', verifyFields, validateFields, login.login);

module.exports = router; 