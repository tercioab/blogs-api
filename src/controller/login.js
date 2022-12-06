const userService = require('../service/user');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { user, token } = await userService.getUserByEmail(email);

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (!user) {
     return res.status(400).json({ message: 'Invalid fields' });
    }

    // if (user.password !== password) {
    //     return res.status(400).json({ message: 'Invalid fields' });
    //    }

return res.status(200).json({ token });
};

module.exports = {
    login,
};