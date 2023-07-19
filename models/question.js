const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Question = sequelize.define("questions",{
    questionId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    surveyQuestion: {
        type: Sequelize.TEXT,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
    },
})

module.exports = Question;