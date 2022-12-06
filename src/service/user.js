const { User } = require('../models');
const { createToken } = require('../auth/jwtFunctions');

const getUserByEmail = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user || password !== user.password) {
        return { status: 400, message: 'Invalid fields' };
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const payload = { data: userWithoutPassword };
    const token = createToken(payload);
    return { status: 200, token };
};

module.exports = {
    getUserByEmail,
};