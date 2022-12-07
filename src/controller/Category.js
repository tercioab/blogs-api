const categoryService = require('../service/category');

const insertCategory = async (req, res) => {
    const { name } = req.body;
  
    const category = await categoryService.insertCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    insertCategory,
};