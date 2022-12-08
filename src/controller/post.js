const postService = require('../service/post');  
const { createPostCategory } = require('../service/category');

const newPost = async (req, res) => {
    try {
const { title, content, categoryIds } = req.body;
        const { id } = req.currentUser.data;
        const { dataValues } = await postService.newPost(title, content, categoryIds, id);
        categoryIds.map((idCategory) => createPostCategory(dataValues.id, idCategory));
        return res.status(201).json({ ...dataValues, userId: id });
} catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
    }
};

const allPosts = async (req, res) => {
    try {
        const posts = await postService.allPosts();
      return res.status(200).json(posts);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    newPost,
    allPosts,
};