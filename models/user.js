'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userId: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: DataTypes.STRING,
    isCompleted: {
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
   }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false 

  });
  return User;
};