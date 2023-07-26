const models = require('../models/index')


// get - all response 
const getResponses = async (req, res) => {

    try{
    const response = await models.Response.findAll({
        include: [{
          model:  models.Question_Option,
          include: [
            models.Question, models.Option
          ]
          },
    ]})
    res.status(200).send(response)
    }
    catch(err){
        return(err)
    }

}

// post call for the responses
const createResponse = async (req, res) => {
    const responsesArray = req.body;
  
    try {
      for (const response of responsesArray) {
         await models.Response.create(response);
      }
  
       res.status(200).send("Responses saved successfully.");
       
    } catch (error) {
        return(err)
    }
}


module.exports = {
    getResponses,
    createResponse
 }