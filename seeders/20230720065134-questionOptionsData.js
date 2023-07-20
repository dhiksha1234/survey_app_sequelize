'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('question_options',   [
      { questionOptionId: '1', questionId: '1', optionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '2', questionId: '1', optionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '3', questionId: '1', optionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '4', questionId: '1', optionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '5', questionId: '1', optionId: '5', createdAt: new Date(), updatedAt: new Date() },

      { questionOptionId: '6', questionId: '2', optionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '7', questionId: '2', optionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '8', questionId: '2', optionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '9', questionId: '2', optionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '10', questionId: '2', optionId: '5', createdAt: new Date(), updatedAt: new Date() },

      { questionOptionId: '11', questionId: '3', optionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '12', questionId: '3', optionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '13', questionId: '3', optionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '14', questionId: '3', optionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '15', questionId: '3', optionId: '5', createdAt: new Date(), updatedAt: new Date() },

      { questionOptionId: '16', questionId: '4', optionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '17', questionId: '4', optionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '18', questionId: '4', optionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '19', questionId: '4', optionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '20', questionId: '4', optionId: '5', createdAt: new Date(), updatedAt: new Date() },

      { questionOptionId: '21', questionId: '5', optionId: '1', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '22', questionId: '5', optionId: '2', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '23', questionId: '5', optionId: '3', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '24', questionId: '5', optionId: '4', createdAt: new Date(), updatedAt: new Date() },
      { questionOptionId: '25', questionId: '5', optionId: '5', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('question_options', null, {});

  }
};
