'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.createTable('responses', {
       responseId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            model: 'users', 
            Key: 'userId' 
        },
        questionOptionId: {
            type: Sequelize.INTEGER,
            model: 'question_options', 
            Key: 'questionOptionId' 
        }
      });

  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.dropTable('responses');

  }
};
