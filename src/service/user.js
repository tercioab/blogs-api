const { User } = require('../models');

const newUser = async ({ displayName, email, password, image }) => {
    const checkemailUserExist = await User.findOne({ where: { email } });
    if (checkemailUserExist) {
        return { status: 409, message: 'User already registered' };
    }

    const user = await User.create({ displayName, email, password, image });

    return { status: 201, user };
};

const getAlluser = async () => User.findAll({ attributes: { exclude: ['password'] } });

const userbyId = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
        return { status: 404, message: 'User does not exist' }; 
    } return { status: 200, user };
};

const deleteMe = async (id) => User.destroy({ where: { id } });

module.exports = {
    newUser,
    getAlluser,
    userbyId,
    deleteMe,
};