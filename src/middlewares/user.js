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

module.exports = {
    verifyLengthsName,
    validEmail,
    verifyLengthsPassword,
};