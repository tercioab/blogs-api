const express = require('express');

const router = express.Router();
const post = require('../controller/post');
const { verifyToken } = require('../auth/jwtFunctions');
const { 
    requiredFields,
  requiredFieldsUpdatePost,
} = require('../middlewares/post');

router.get('/', verifyToken, post.allPosts);

router.get('/search', verifyToken, post.findPost);

router.post('/', verifyToken, requiredFields, post.newPost);

router.get('/:id', verifyToken, post.getPostById);

router.put('/:id', verifyToken, requiredFieldsUpdatePost, post.updatePost);

router.delete('/:id', verifyToken, post.deletePost);

module.exports = router; 