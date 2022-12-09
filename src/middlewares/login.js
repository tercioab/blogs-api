const { User } = require('../models');

const validateFields = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    } 

    if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid fields' });
    } 
    
    next();
};

const verifyFields = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
     return res.status(400).json({ message: 'Some required fields are missing' }); 
} next();
};

module.exports = {
    verifyFields,
    validateFields,
};