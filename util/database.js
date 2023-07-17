const Sequelize = require('sequelize');

const sequelize = new Sequelize('survey_app','dhiksha','Helloworld@123',{
    dialect:"mysql",
})

module.exports = sequelize;