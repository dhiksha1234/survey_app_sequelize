'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responses', {
      responseId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      questionOptionId: {
        type: Sequelize.INTEGER,
        model: 'question_options', 
        Key: 'questionOptionId' ,
        onDelete: 'cascade'
        
      },
      userId: {
        type: Sequelize.INTEGER,
        model: 'users', 
        Key: 'userId' ,
        onDelete: 'cascade'
 
      },
 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('responses');
  }
};