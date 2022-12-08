const { Category, PostCategory } = require('../models');

const insertCategory = async (name) => Category.create({ name });

const getAllCategory = async () => Category.findAll();  

const categoryById = async (id) => {
    const categoryId = await Category.findByPk(id);
    if (!categoryId) {
        return false;
    } return true;
};

const createPostCategory = async (postId, categoryId) => {
    const postCtg = PostCategory.create({ postId, categoryId });
    return postCtg;
};

module.exports = {
    insertCategory,
    getAllCategory,
    categoryById,
    createPostCategory,
};