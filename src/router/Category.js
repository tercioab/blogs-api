const express = require('express');

const router = express.Router();
const category = require('../controller/Category');
const { nameRequired } = require('../middlewares/category');
const { verifyToken } = require('../auth/jwtFunctions');

router.post('/', nameRequired, verifyToken, category.insertCategory);

module.exports = router; 