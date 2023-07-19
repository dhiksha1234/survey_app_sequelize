'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('options',   [
      { optionId: '1', surveyOptions: 'Strongly Agree', createdAt: new Date(), updatedAt: new Date() },
      { optionId: '2', surveyOptions: 'Agree',createdAt: new Date(), updatedAt: new Date() },
      { optionId: '3', surveyOptions: 'Neutral', createdAt: new Date(), updatedAt: new Date() },
      { optionId: '4', surveyOptions: "Disagree",createdAt: new Date(), updatedAt: new Date() },
      { optionId: '5', surveyOptions: 'Strongly Disagree', createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('options', null, {});
  }
};
