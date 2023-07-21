const models = require('../models/index')
 

// for all the questions
const getResponses = async (req, res) => {

    try{
    const response = await models.Response.findAll()
    res.status(200).send(response)
    }
    catch(err){
        console.log("Responses are not fetched",err)
    }

}


// create a response for each user

const createResponses = async (req, res) => {

    let data = {
        user_id: req.params.userId,
        questionOptionId: req.params.questionOptionId, 
    }

    try{
    const response = await Response.create(data);
    }
    catch(err){
        console.log("Responses are not created",err)
    }
}


module.exports = {
    getResponses
}