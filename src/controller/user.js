const userService = require('../service/user');
const { createToken } = require('../auth/jwtFunctions');

const newUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const user = await userService.newUser({ displayName, email, password, image });
   
    const token = createToken(user);
    
    res.status(201).json({ token });
};

const getAll = async (req, res) => {
    const allUsers = await userService.getAll();
    res.status(200).json(allUsers);
};

module.exports = {
    newUser,
    getAll,
};