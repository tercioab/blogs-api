const express = require('express');

const router = express.Router();
const login = require('../controller/login');
const { verifyFields, invalidField } = require('../middlewares/login');

router.post('/', verifyFields, invalidField, login.login);

module.exports = router; 