'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
      await queryInterface.bulkInsert('questions',   [
        { id: '1', surveyQuestion: 'I am confident that I will successfully complete this course', createdAt: new Date(), updatedAt: new Date() },
        { id: '2', surveyQuestion: 'You are a fast learner', createdAt: new Date(), updatedAt: new Date() },
        { id: '3', surveyQuestion: 'You are a interested in Science', createdAt: new Date(), updatedAt: new Date() },
        { id: '4', surveyQuestion: "Do you know Newton's first law", createdAt: new Date(), updatedAt: new Date() },
        { id: '5', surveyQuestion: 'Do you like Algebra', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('questions', null, {});
     
  }
};
