const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Question = sequelize.define("question",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
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