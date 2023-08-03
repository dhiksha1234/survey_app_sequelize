'use strict';
const {
  Model
} = require('sequelize');
  

module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Response.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'cascade' 
        });
      Response.belongsTo(models.Question_Option, {
            foreignKey: 'questionOptionId',
            onDelete: 'cascade' 

        });
    }
  }
  Response.init({
    responseId: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    questionOptionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
   },
   {
    sequelize,
    modelName: 'Response',
    tableName: 'responses',
    timestamps: false 

  });
  return Response;
};