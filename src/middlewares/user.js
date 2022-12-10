const Joi = require('joi');

const verifyUser = (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        displayName: Joi.string().min(8).required(),
        image: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: error.details[0].message });
    }
  
    next();
  };

module.exports = {
    verifyUser,
};