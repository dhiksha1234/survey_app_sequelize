const sequelize = require("./config/database")


const express = require('express')
const cors = require('cors');

const port = 8000

const app = express();

app.use(cors());
app.use(express.json());

// Routers
const surveyQuestion = require('./routes/questionRouter')
app.use('/question', surveyQuestion)
const surveyOption = require('./routes/optionRouter')
app.use('/option',surveyOption)
const surveyResponses = require('./routes/responseRouter')
app.use('/response',surveyResponses)
const surveyUser = require('./routes/userRouter')
app.use('/user',surveyUser)

// const hasAssociation = Question.associations.hasOwnProperty('optionques');
// console.log(hasAssociation);


sequelize.sync({ alter : true }).then((result) => {
})

app.listen(port,()=>{
    console.log('Connected on 8000')
})