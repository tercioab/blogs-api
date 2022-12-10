const userService = require('../service/user');
const { createToken } = require('../auth/jwtFunctions');

const newUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { user, message, status } = await userService
    .newUser({ displayName, email, password, image });
if (message) {
    return res.status(status).json({ message });
} const token = createToken(user);
    res.status(status).json({ token });
};

const getAlluser = async (_req, res) => {
    const allUsers = await userService.getAlluser();
    res.status(200).json(allUsers);
};

const userbyId = async (req, res) => {
    const { id } = req.params;
    const { user, message, status } = await userService.userbyId(id);
    if (message) {
        return res.status(status).json({ message });
    } return res.status(status).json(user);
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