const { Category, PostCategory } = require('../models');

const insertCategory = async (name) => Category.create({ name });

const getAllCategory = async () => Category.findAll();  

const foundCategory = async (id) => {
    const categoryId = await Category.findByPk(id);
    if (!categoryId) {
        return false;
    } return true;
};

const createPostCategory = async (postId, categoryId) => PostCategory
    .create({ postId, categoryId });

module.exports = {
    insertCategory,
    getAllCategory,
    foundCategory,
    createPostCategory,
};