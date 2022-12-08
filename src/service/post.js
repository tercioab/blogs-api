const { Op } = require('sequelize');
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

const findPost = async (titleOrContent) => BlogPost
    .findAll({
        where: { [Op.or]: [
            { title: { [Op.like]: `%${titleOrContent}%` } },
            { content: { [Op.like]: `%${titleOrContent}%` } },
          ] },
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });

module.exports = {
    newPost,
    allPosts,
    getPostById,
    updatePost,
    deletePost,
    findPost,
};