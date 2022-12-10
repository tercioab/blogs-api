const Joi = require('joi');

const requiredFields = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    } next();
};

const requiredFieldsUpdatePost = async (req, res, next) => {
    const { error } = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }).validate(req.body);

    if (error) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = {
    requiredFields,
    requiredFieldsUpdatePost,
};