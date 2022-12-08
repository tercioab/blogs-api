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

const allPosts = async (_req, res) => {
    try {
        const posts = await postService.allPosts();
      return res.status(200).json(posts);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.getPostById(id);
        return res.status(200).json(post);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const updatePost = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    await postService.updatePost(title, content, id);
  
    const post = await postService.getPostById(id);
    console.log(post.userId);
    res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    await postService.deletePost(id);
    res.sendStatus(204);
};

module.exports = {
    newPost,
    allPosts,
    getPostById,
    updatePost,
    deletePost,
};