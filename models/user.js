const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define("user",{
    userId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})

module.exports = User;