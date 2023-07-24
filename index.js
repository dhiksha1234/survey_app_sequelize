const db = require("./models/index")
const express = require('express')
const cors = require('cors');
const surveyQuestion = require('./routes/questionRouter')
const surveyOption = require('./routes/optionRouter')
const surveyResponses = require('./routes/responseRouter')
const surveyUser = require('./routes/userRouter')

const port = 8000

const app = express();

app.use(cors());
app.use(express.json());

const apiRoute = express.Router();
 
apiRoute.use('/question', surveyQuestion)
apiRoute.use('/option',surveyOption)
apiRoute.use('/response',surveyResponses)
apiRoute.use('/user',surveyUser)

 app.use('/api/v1', apiRoute);



db.sequelize.sync({ alter : true }).then((result) => {
})

app.listen(port,()=>{
    console.log('Connected on 8000')
})