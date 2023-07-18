const sequelize = require("./config/database")
const Question = require('./models/question')
const Option = require('./models/option')
const User = require('./models/user')

const express = require('express')
const cors = require('cors');

const port = 8000

const app = express();

app.use(cors());
app.use(express.json());

Question.hasMany(Option)
Option.belongsTo(Question)

// routers
const surveyQuestion = require('./routes/questionRouter')
app.use('/question', surveyQuestion)

sequelize.sync({ alter: true }).then((result) => {
    console.log(result)
})

app.listen(port,()=>{
    console.log('Connected on 3000')
})