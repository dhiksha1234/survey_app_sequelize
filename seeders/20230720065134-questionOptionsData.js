'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
    await queryInterface.bulkInsert('question_options',   [
      { questionOptionId: '1', questionId: '1', optionId: '1' },
      { questionOptionId: '2', questionId: '1', optionId: '2' },
      { questionOptionId: '3', questionId: '1', optionId: '3' },
      { questionOptionId: '4', questionId: '1', optionId: '4' },
      { questionOptionId: '5', questionId: '1', optionId: '5' },

      { questionOptionId: '6', questionId: '2', optionId: '1' },
      { questionOptionId: '7', questionId: '2', optionId: '2' },
      { questionOptionId: '8', questionId: '2', optionId: '3' },
      { questionOptionId: '9', questionId: '2', optionId: '4' },
      { questionOptionId: '10', questionId: '2', optionId: '5'},

      { questionOptionId: '11', questionId: '3', optionId: '1' },
      { questionOptionId: '12', questionId: '3', optionId: '2'},
      { questionOptionId: '13', questionId: '3', optionId: '3'},
      { questionOptionId: '14', questionId: '3', optionId: '4' },
      { questionOptionId: '15', questionId: '3', optionId: '5'},

      { questionOptionId: '16', questionId: '4', optionId: '1' },
      { questionOptionId: '17', questionId: '4', optionId: '2' },
      { questionOptionId: '18', questionId: '4', optionId: '3' },
      { questionOptionId: '19', questionId: '4', optionId: '4'},
      { questionOptionId: '20', questionId: '4', optionId: '5' },

      { questionOptionId: '21', questionId: '5', optionId: '1' },
      { questionOptionId: '22', questionId: '5', optionId: '2' },
      { questionOptionId: '23', questionId: '5', optionId: '3' },
      { questionOptionId: '24', questionId: '5', optionId: '4' },
      { questionOptionId: '25', questionId: '5', optionId: '5' },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('question_options', null, {});

  }
};
