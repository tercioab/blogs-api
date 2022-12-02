'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('blog_posts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type:Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
          },
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'user_id',
          references: {
            model: 'users',
            key: 'id',
          },
        }, 
          published:  {
            allowNull: false,
            type: Sequelize.DATE
          },
        updated: {
          allowNull: false,
          type: Sequelize.DATE
        },
      });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};
