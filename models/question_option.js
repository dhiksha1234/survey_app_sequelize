const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const Question_Option = sequelize.define("responses",{
    questionOptionId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    questionId: {
        type: Sequelize.INTEGER,
        references: 'questions', 
        referencesKey: 'questionId' 
    },
    optionId: {
        type: Sequelize.INTEGER,
        references: 'options', 
        referencesKey: 'optionId' 
    }
   
})

module.exports = Question_Option;