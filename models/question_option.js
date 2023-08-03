'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question_Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question_Option.belongsTo(models.Question, {
        foreignKey: 'questionId',
        onDelete: 'cascade'
      });
      
      Question_Option.belongsTo(models.Option, {
        foreignKey: 'optionId',
        onDelete: 'cascade'
      });
    }
  }
  Question_Option.init({
    questionOptionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    } ,
    questionId: {
      type: DataTypes.INTEGER,
      model: 'questions', 
      Key: 'questionId' 
    },
    optionId: {
      type: DataTypes.INTEGER,
      model: 'options', 
      Key: 'optionId' 
    },
 


  }, {
    sequelize,
    modelName: 'Question_Option',
    tableName:'question_options',
    timestamps: false 

  });
  return Question_Option;
};