const sequelize = require("./config/database")
const Question = require('./models/question')
const Option = require('./models/option')
const Response = require('./models/response')
const question_options = require('./models/question_option')
const User = require('./models/user')

const express = require('express')
const cors = require('cors');

const port = 8000

const app = express();

app.use(cors());
app.use(express.json());

//Association for questionOption Table
Question.belongsToMany(Option, { through: question_options, foreignKey: 'optionId'})
Option.belongsToMany(Question, { through: question_options, foreignKey: 'questionId'})

//Association for Response Table

Response.belongsTo(User, {
    foreignKey: 'userId',
});
Response.belongsTo(question_options, {
    foreignKey: 'questionOptionId',
});

// Routers
const surveyQuestion = require('./routes/questionRouter')
app.use('/question', surveyQuestion)
const surveyOption = require('./routes/optionRouter')
app.use('/option',surveyOption)
const surveyResponses = require('./routes/responseRouter')
app.use('/response',surveyResponses)
const surveyUser = require('./routes/userRouter')
app.use('/user',surveyUser)


sequelize.sync({ alter: true }).then((result) => {
})

app.listen(port,()=>{
    console.log('Connected on 8000')
})