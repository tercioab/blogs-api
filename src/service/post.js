const { BlogPost } = require('../models');

const newPost = async (title, content, categoryIds, id) => {
    const post = await BlogPost.create({ userId: id, title, content, categoryIds });
    return post;
};

module.exports = {
    newPost,
};