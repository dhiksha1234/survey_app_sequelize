'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('options',   [
      { optionId: '1', surveyOptions: 'Strongly Agree' },
      { optionId: '2', surveyOptions: 'Agree' },
      { optionId: '3', surveyOptions: 'Neutral' },
      { optionId: '4', surveyOptions: "Disagree" },
      { optionId: '5', surveyOptions: 'Strongly Disagree'},
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('options', null, {});
  }
};
