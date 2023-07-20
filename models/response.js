const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Response = sequelize.define("responses",{
    // responseId:{
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    // },
    // userId: {
    //     type: Sequelize.INTEGER,
    //     references: 'users', 
    //     referencesKey: 'userId' 
    // },
    // questionOptionId: {
    //     type: Sequelize.INTEGER,
    //     references: 'question_options', 
    //     referencesKey: 'questionOptionId' 
    // }
})

module.exports = Response;