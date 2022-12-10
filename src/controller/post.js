const postService = require('../service/post');  
const { createPostCategory } = require('../service/category');

const newPost = async (req, res) => {
    try {
const { title, content, categoryIds } = req.body;
        const { id } = req.currentUser.data;
        const { status, message, post } = await postService
            .newPost(title, content, categoryIds, id);
        if (message) {
    return res.status(status).json({ message });
}
        await Promise.all(categoryIds
            .map((idCategory) => createPostCategory(post.dataValues.id, idCategory)));
        return res.status(status).json({ ...post.dataValues, userId: id });
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
        const { post, status, message } = await postService.getPostById(id);
        if (message) {
         return res.status(status).json({ message });
     }
        return res.status(status).json(post);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

const updatePost = async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const tokenUser = req.currentUser.data;
    const { status, message } = await postService.updatePost(title, content, id, tokenUser);
    if (message) {
        return res.status(status).json({ message });
    }
  
    const { post } = await postService.getPostById(id);
    res.status(status).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const tokenUser = req.currentUser.data;
    const { status, message } = await postService.deletePost(id, tokenUser);
    if (message) {
        return res.status(status).json({ message });
    }
    return res.sendStatus(status);
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