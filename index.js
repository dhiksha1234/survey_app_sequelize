const db = require("./models/index")
const express = require('express')
const cors = require('cors');
const surveyQuestion = require('./routes/question')
const surveyOption = require('./routes/option')
const surveyResponses = require('./routes/response')
const surveyUser = require('./routes/user')
 
const port = process.env.PORT || 8000

const app = express();

app.use(cors());
app.use(express.json());

const apiRoute = express.Router();
 
apiRoute.use('/question', surveyQuestion)
apiRoute.use('/option',surveyOption)
apiRoute.use('/response',surveyResponses)
apiRoute.use('/user',surveyUser)

app.use('/api/v1', apiRoute);



db.sequelize.sync({ alter : true , logging: false}).then((result) => {
})

app.listen(port,()=>{
    console.log(`Connected on ${port}` )
})