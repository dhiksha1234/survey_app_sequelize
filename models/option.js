'use strict';
const {
  Model
} = require('sequelize');
 
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Option.belongsToMany(models.Question , 
       { through: models.Question_Option, foreignKey: 'questionId' , onDelete: 'cascade' })
    }
  }
  Option.init({
    optionId:{
     type : DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true
    },
    
    surveyOptions: DataTypes.STRING,
   }, {
    sequelize,
    modelName: 'Option',
    tableName: 'options',
    timestamps: false,
  });
  return Option;
};