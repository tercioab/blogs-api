const { categoryById } = require('../service/category');
const { getPostById } = require('../service/post');

const verifyCategoryExist = async (req, res, next) => {
    const { categoryIds } = req.body;

    const checkIdExist = await Promise.all(categoryIds.map(async (ids) => {
        const conference = await categoryById(ids);
        return conference;
    }));

    const categoryNotFound = checkIdExist.some((results) => results === false);

    if (categoryNotFound) {
       return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    } next();
};

const requiredFields = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    } next();
};

const verifyPostExist = async (req, res, next) => {
    const { id } = req.params;
    const postExist = await getPostById(id); 
    if (!postExist) {
        return res.status(404).json({ message: 'Post does not exist' });
    } next();
};

const verifyUserId = async (req, res, next) => {
    const { id } = req.params;
    const tokenUser = req.currentUser.data;
    const { userId } = await getPostById(id);
    console.log(userId);
    if (tokenUser.id !== userId) {
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
    verifyCategoryExist,
    requiredFields,
    verifyPostExist,
    verifyUserId,
    requiredFieldsUpdatePost,
};