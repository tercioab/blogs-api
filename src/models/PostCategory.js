const postCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
  
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    };
  
    return PostCategory;
  };
  
  module.exports = postCategoryModel;