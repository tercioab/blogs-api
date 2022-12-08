const express = require('express');

const router = express.Router();
const post = require('../controller/post');
const { verifyToken } = require('../auth/jwtFunctions');
const { verifyCategoryExist, requiredFields, verifyPostExist } = require('../middlewares/post');

router.post('/', verifyToken, requiredFields, verifyCategoryExist, post.newPost);

router.get('/', verifyToken, post.allPosts);

router.get('/:id', verifyToken, verifyPostExist, post.getPostById);
module.exports = router; 