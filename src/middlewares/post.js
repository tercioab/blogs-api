const { categoryById } = require('../service/category');

const verifyCategoryExist = async (req, res, next) => {
    const { categoryIds } = req.body;
    const conferenceId = await Promise.all(categoryIds.map(async (ids) => {
        const conference = await categoryById(ids);
        return conference;
    }));

    const categoryNotFound = conferenceId.some((result) => result === false);

    if (categoryNotFound) {
       return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    } next();
};

const requiredFields = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    } next();
};

module.exports = {
    verifyCategoryExist,
    requiredFields,
};
