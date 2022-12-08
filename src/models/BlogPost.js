const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user' });
    };
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;