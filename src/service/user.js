const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getAlluser = async () => User.findAll({ attributes: { exclude: ['password'] } });

const userbyId = async (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

module.exports = {
    newUser,
    getAlluser,
    userbyId,
};