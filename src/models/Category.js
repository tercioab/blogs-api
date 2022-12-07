module.exports = (sequelize,DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
      tableName: 'categories',
      timestamps: false,
    })
    return Category;
  }