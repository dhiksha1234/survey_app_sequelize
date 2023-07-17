const sequelize = require("./util/database")
const Question = require('./models/question')
const Option = require('./models/option')
const User = require('./models/user')

const express = require('express')

const port = 3000

const app = express();

Question.hasMany(Option)
Option.belongsTo(Question)

// routers
const surveyQuestion = require('./routes/questionRouter')
app.use('/question', surveyQuestion)

sequelize.sync().then((result) => {
    console.log(result)
})

app.listen(port,()=>{
    console.log('Connected on 3000')
})