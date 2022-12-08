const express = require('express');

const router = express.Router();
const post = require('../controller/post');
const { verifyToken } = require('../auth/jwtFunctions');
const { verifyCategoryExist, requiredFields } = require('../middlewares/post');

router.post('/', verifyToken, requiredFields, verifyCategoryExist, post.newPost);
router.get('/', verifyToken, post.allPosts);
module.exports = router; 