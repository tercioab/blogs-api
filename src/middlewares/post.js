const { getPostById } = require('../service/post');

const requiredFields = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    } next();
};

const verifyUserId = async (req, res, next) => {
    const { id } = req.params;
    const tokenUser = req.currentUser.data;
 
    const { post, message, status } = await getPostById(id);
    if (message) {
        return res.status(status).json({ message });
    }

    if (tokenUser.id !== post.dataValues.userId) {
       return res.status(401).json({ message: 'Unauthorized user' }); 
    } next();
};

const requiredFieldsUpdatePost = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    } next();
};

module.exports = {
    requiredFields,
    verifyUserId,
    requiredFieldsUpdatePost,
};