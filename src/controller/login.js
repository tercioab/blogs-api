const userService = require('../service/user');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { status, message, token } = await userService.getUserByEmail(email, password);
   
    if (message) {
       return res.status(status).json({ message });
    }

 res.status(status).json({ token });
};

module.exports = {
    login,
};