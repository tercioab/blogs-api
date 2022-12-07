const { User } = require('../models');

const verifyLengthsName = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    } next();
};

const verifyLengthsPassword = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    } next();
};

const emailFormat = (email) => {
    const ruleEmail = /\S+@\S+\.\S+/;
    const emailOk = ruleEmail.test(email);
    return emailOk;
};

const validEmail = (req, res, next) => {
    const { email } = req.body;
    if (!emailFormat(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    } next();
};

const verifyEmailExist = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    } next();
};

const verifyUserExist = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    } return next();
};

module.exports = {
    verifyLengthsName,
    validEmail,
    verifyLengthsPassword,
    verifyEmailExist,
    verifyUserExist,
};