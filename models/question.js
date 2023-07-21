'use strict';
const {
  Model
} = require('sequelize');
 
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsToMany(models.Option , 
        { through: models.Question_Option, foreignKey: 'optionId', onDelete: 'cascade' })
     }
  }
  Question.init({
    questionId:  {
      type : DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    surveyQuestion: DataTypes.STRING,
 
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
    timestamps: false 

  
  });
  return Question;
};