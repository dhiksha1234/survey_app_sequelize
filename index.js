const sequelize = require("./config/database")
const Question = require('./models/question')
const Option = require('./models/option')
const Response = require('./models/response')
const Question_Option = require('./models/question_option')
const User = require('./models/user')

const express = require('express')
const cors = require('cors');

const port = 8000

const app = express();

app.use(cors());
app.use(express.json());

Question.belongsToMany(Option, { through: Question_Option, foreignKey: 'optionId'})
Option.belongsToMany(Question, { through: Question_Option, foreignKey: 'questionId'})



// //Responses table by student
Response.belongsTo(User, {
    foreignKey: 'userId',
});
Response.belongsTo(Question_Option, {
    foreignKey: 'questionOptionId',
});

// routers
const surveyQuestion = require('./routes/questionRouter')
app.use('/question', surveyQuestion)
const surveyOption = require('./routes/optionRouter')
app.use('/option',surveyOption)
const surveyResponses = require('./routes/responseRouter')
app.use('/response',surveyResponses)


const hasAssociation = Question.associations.hasOwnProperty('optionss');
console.log(hasAssociation);

sequelize.sync({ alter: true }).then((result) => {
    console.log(result)
})

app.listen(port,()=>{
    console.log('Connected on 8000')
})