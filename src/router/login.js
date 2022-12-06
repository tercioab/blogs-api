const express = require('express');

const router = express.Router();
const user = require('../controller/login');

router.post('/', user.login);

module.exports = router; 