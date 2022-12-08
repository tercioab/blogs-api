const userService = require('../service/user');
const { createToken } = require('../auth/jwtFunctions');

const newUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userService.newUser({ displayName, email, password, image });
    const token = createToken(user);
    res.status(201).json({ token });
};

const getAlluser = async (req, res) => {
    const allUsers = await userService.getAlluser();
    res.status(200).json(allUsers);
};

const userbyId = async (req, res) => {
    const { id } = req.params;
    const user = await userService.userbyId(id);
    res.status(200).json(user);
};

const deleteMe = async (req, res) => {
    const { id } = req.currentUser.data;
    await userService.deleteMe(id);
    res.sendStatus(204);
};

module.exports = {
    newUser,
    getAlluser,
    userbyId,
    deleteMe,
};