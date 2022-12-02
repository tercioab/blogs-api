'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_categories',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'post_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'blog_posts',
            key: 'id',
          },
        },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'category_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('post_categories');
  }
};
