const express = require('express');

const router = express.Router();

const user = require('../controller/user');

const {
    verifyLengthsName,
    validEmail,
    verifyLengthsPassword,
    verifyEmailExist,
} = require('../middlewares/user');

router.post('/', verifyLengthsName,
validEmail,
verifyLengthsPassword,
verifyEmailExist, user.newUser);

module.exports = router;