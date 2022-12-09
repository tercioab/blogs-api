const loginService = require('../service/login');

const login = async (req, res) => {
    const { email } = req.body;
    const { token } = await loginService.login(email);
    res.status(200).json({ token });
};

module.exports = {
    login,
};