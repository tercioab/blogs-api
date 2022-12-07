// const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getAlluser = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return users;
};

const userbyId = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    return { status: 200, user };
};

module.exports = {
    newUser,
    getAlluser,
    userbyId,
};