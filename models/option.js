const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Option = sequelize.define("options",{
    optionId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    surveyOptions: {
        type: Sequelize.STRING,
        allowNull: false,
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

module.exports = Option;