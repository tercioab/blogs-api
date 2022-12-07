const express = require('express');

const router = express.Router();

const user = require('../controller/user');

const {
    verifyLengthsName,
    validEmail,
    verifyLengthsPassword,
    verifyEmailExist,
} = require('../middlewares/user');

const { verifyToken } = require('../auth/jwtFunctions');

router.post('/',
    verifyLengthsName,
    validEmail,
   verifyLengthsPassword,
    verifyEmailExist, user.newUser);

    router.get('/', verifyToken, user.getAll);

module.exports = router;