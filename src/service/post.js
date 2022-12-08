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
  
const getPostById = async (id) => BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});
  
const updatePost = async (title, content, id) => BlogPost.update(
    { title, content },
    { where: { id } },
);

const deletePost = async (id) => BlogPost.destroy({ where: { id } });

module.exports = {
    newPost,
    allPosts,
    getPostById,
    updatePost,
    deletePost,
};