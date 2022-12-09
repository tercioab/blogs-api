const express = require('express');

const router = express.Router();
const post = require('../controller/post');
const { verifyToken } = require('../auth/jwtFunctions');
const { 
    requiredFields,
    verifyUserId, requiredFieldsUpdatePost,
} = require('../middlewares/post');

router.get('/', verifyToken, post.allPosts);

router.get('/search', verifyToken, post.findPost);

router.post('/', verifyToken, requiredFields, post.newPost);

router.get('/:id', verifyToken, post.getPostById);

router.put('/:id', verifyToken, verifyUserId, requiredFieldsUpdatePost, post.updatePost);
module.exports = router; 

router.delete('/:id', verifyToken, verifyUserId, post.deletePost);