const loginService = require('../service/login');
const { createToken } = require('../auth/jwtFunctions');

const login = async (req, res) => {
    const { email } = req.body;
    const { userWithoutPassword } = await loginService.login(email);
    const token = createToken(userWithoutPassword);
    res.status(200).json({ token });
};

module.exports = {
    login,
};