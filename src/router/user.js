const express = require('express');

const router = express.Router();

const user = require('../controller/user');

const {
    verifyUser,
} = require('../middlewares/user');

const { verifyToken } = require('../auth/jwtFunctions');

router.post('/',
   verifyUser,
  user.newUser);

router.get('/', verifyToken, user.getAlluser);
router.get('/:id', verifyToken, user.userbyId);
router.delete('/me', verifyToken, user.deleteMe);

module.exports = router;