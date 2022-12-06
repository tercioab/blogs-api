const express = require('express');

const router = express.Router();

const user = require('../controller/user');

const midd = require('../middlewares/user');

router.post('/', ...midd, user.example);

module.exports = router;