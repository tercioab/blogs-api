const { User } = require('../models');
const { createToken } = require('../auth/jwtFunctions');

const login = async (email) => {
    const { dataValues } = await User.findOne({ where: { email } });
    const { password: _, ...userWithoutPassword } = dataValues;
    const token = createToken(userWithoutPassword);
    return { token };
};

module.exports = {
    login,
};