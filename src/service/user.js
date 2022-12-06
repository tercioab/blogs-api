const { User } = require('../models');
const { createToken } = require('../auth/jwtFunctions');

const getUserByEmail = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!email || !password) {
        return { status: 400, message: 'Some required fields are missing' }; 
    }
    if (!user || password !== user.password) {
        return { status: 400, message: 'Invalid fields' };
    }
    const payload = { data: user };
    const token = createToken(payload);
    return { status: 200, token };
};

module.exports = {
    getUserByEmail,
};