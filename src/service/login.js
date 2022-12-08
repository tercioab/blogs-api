const { User } = require('../models');

const login = async (email) => {
    const { dataValues } = await User.findOne({ where: { email } });
    const { password: _, ...userWithoutPassword } = dataValues;
    return { userWithoutPassword };
};

module.exports = {
    login,
};