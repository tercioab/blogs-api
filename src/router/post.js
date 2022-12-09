const express = require('express');

const router = express.Router();
const post = require('../controller/post');
const { verifyToken } = require('../auth/jwtFunctions');
const { verifyCategoryExist,
    requiredFields, verifyPostExist,
    verifyUserId, requiredFieldsUpdatePost,
} = require('../middlewares/post');

router.get('/', verifyToken, post.allPosts);

router.get('/search', verifyToken, post.findPost);

router.post('/', verifyToken, verifyCategoryExist, requiredFields, post.newPost);

router.get('/:id', verifyToken, verifyPostExist, post.getPostById);

router.put('/:id', verifyToken, verifyUserId, requiredFieldsUpdatePost, post.updatePost);
module.exports = router; 

router.delete('/:id', verifyToken, verifyPostExist, verifyUserId, post.deletePost);