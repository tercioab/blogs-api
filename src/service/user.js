const { User } = require('../models');
const { createToken } = require('../auth/jwtFunctions');

const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
    return { user, token };
};

module.exports = {
    getUserByEmail,
};