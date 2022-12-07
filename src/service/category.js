const { Category } = require('../models');

const insertCategory = async (name) => Category.create({ name });

const getAllCategory = async () => Category.findAll();  

module.exports = {
    insertCategory,
    getAllCategory,
};