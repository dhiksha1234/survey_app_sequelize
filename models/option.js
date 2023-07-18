const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Option = sequelize.define("option",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    options: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Option;