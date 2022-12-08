const postService = require('../service/post');  
const { createPostCategory } = require('../service/category');

const newPostCategory = (categoryIds, dataValues) => {
    categoryIds.map((idCategorys) => createPostCategory(dataValues, idCategorys));
};

const newPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = req.currentUser.data;
        const { dataValues } = await postService.newPost(title, content, categoryIds, id);
            newPostCategory(categoryIds, dataValues.id);
                return res.status(201).json({ ...dataValues, userId: id });
        } catch (e) {
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
    res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    await postService.deletePost(id);
    res.sendStatus(204);
};

const findPost = async (req, res) => {
    const { q } = req.query;
    const post = await postService.findPost(q);
    res.status(200).json(post);
};

module.exports = {
    newPost,
    allPosts,
    getPostById,
    updatePost,
    deletePost,
    findPost,
};