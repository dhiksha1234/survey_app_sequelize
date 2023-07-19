const Sequelize = require('sequelize');

const sequelize = new Sequelize('survey_app','dhiksha','Helloworld@123',{
    dialect:"mysql",
})

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

module.exports = sequelize;