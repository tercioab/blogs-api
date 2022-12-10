const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const { categoryById } = require('./category');

const newPost = async (title, content, categoryIds, id) => {
  const conferenceId = await Promise.all(categoryIds.map(categoryById));
  const categoryNotFound = conferenceId.some((result) => !result);

  if (categoryNotFound) {
    return { status: 400, message: 'one or more "categoryIds" not found' };
  }
    const post = await BlogPost.create({ userId: id, title, content, categoryIds });
    return { status: 201, post };
};

const allPosts = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});
  
const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
 
     include: [
       { model: User, as: 'user', attributes: { exclude: ['password'] } },
       { model: Category, as: 'categories', through: { attributes: [] } },
     ],
  });
   
  if (!post) {
   return { status: 404, message: 'Post does not exist' };
 }
 
 return { status: 200, post }; 
 };
  
const updatePost = async (title, content, id, tokenUser) => {
  const { post } = await getPostById(id);
  if (tokenUser.id !== post.dataValues.userId) {
    return { status: 401, message: 'Unauthorized user' };
  } 
  
  await BlogPost.update(
    { title, content },
    { where: { id } },
); 
return { status: 200 };
};

const deletePost = async (id, tokenUser) => {
  const { post, message, status } = await getPostById(id);
  
  if (message) {
    return { status, message };
  }
 
    if (tokenUser.id !== post.dataValues.userId) {
    return { status: 401, message: 'Unauthorized user' };
  }
   await BlogPost.destroy({ where: { id } });
    return { status: 204 };
};

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