const { BlogPost, User, Category } = require('../models');

const newPost = async (title, content, categoryIds, id) => {
    const post = await BlogPost.create({ userId: id, title, content, categoryIds });
    return post;
};

const allPosts = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

module.exports = {
    newPost,
    allPosts,
};