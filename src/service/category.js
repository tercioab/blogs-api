const { Category } = require('../models');

const insertCategory = async (name) => {
    const category = await Category.create({ name });
    return category; 
};

module.exports = {
    insertCategory,
};