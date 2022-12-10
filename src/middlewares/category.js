const Joi = require('joi');

const nameRequired = (req, res, next) => {
    const { name } = req.body;
    const schema = Joi.object({
        name: Joi.string().required(),
    });
    const { error } = schema.validate({ name });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    nameRequired,
};