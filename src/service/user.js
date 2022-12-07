// const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return users;
};

module.exports = {
    newUser,
    getAll,
};