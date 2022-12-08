const express = require('express');

const router = express.Router();

const user = require('../controller/user');

const {
    verifyLengthsName,
    validEmail,
    verifyLengthsPassword,
    verifyEmailExist,
    verifyUserExist,
} = require('../middlewares/user');

const { verifyToken } = require('../auth/jwtFunctions');

router.post('/',
    verifyLengthsName,
    validEmail,
   verifyLengthsPassword,
    verifyEmailExist, user.newUser);

router.get('/', verifyToken, user.getAlluser);
router.get('/:id', verifyToken, verifyUserExist, user.userbyId);
router.delete('/me', verifyToken, user.deleteMe);

module.exports = router;