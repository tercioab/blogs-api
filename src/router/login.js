const express = require('express');

const router = express.Router();
const user = require('../controller/login');
const { verifyFields } = require('../middlewares/login');

router.post('/', verifyFields, user.login);

module.exports = router; 