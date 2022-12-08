const categoryService = require('../service/category');

const insertCategory = async (req, res) => {
    const { name } = req.body;
    try {
    const category = await categoryService.insertCategory(name);
    return res.status(201).json(category);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: e.message });
  }
};

const getAllCategory = async (_req, res) => {
    try {
        const category = await categoryService.getAllCategory();
        res.status(200).json(category);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

module.exports = {
    insertCategory,
    getAllCategory,
};