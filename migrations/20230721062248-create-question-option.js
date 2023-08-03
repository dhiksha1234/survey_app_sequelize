'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question_options', {
      
    questionOptionId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    questionId: {
        type: Sequelize.INTEGER,
        model: 'questions', 
        Key: 'questionId' ,
        onDelete: 'cascade'
    },
    optionId: {
        type: Sequelize.INTEGER,
        model: 'options', 
        Key: 'optionId' ,
        onDelete: 'cascade'
 
    } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question_options');
  }
};