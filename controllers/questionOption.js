 const models = require('../models/index')


// get all the questions and options
const getQuestionAndOption = async (req, res) => {

    try{

    const questionOption = await models.Question.findAll({
       include: [{
        model:  models.Option,
        through: { attributes : []}
         },
      ]    
    })
    res.status(200).send(questionOption)
    }
    catch(error){
        throw new Error("Error in fetching question and option",error);
    }

} 

// post call for the responses
const createResponse = async (req, res) => {
    const responsesArray = req.body;
   
    try {

      for (const response of responsesArray) {

         const questionOption = await models.Question_Option.findOne({
          where: { questionId:  response.questionId, optionId: response.selectedOption },

        });

        if(!questionOption){
            throw new Error("Question option not found");
        }

        await models.Response.create({
          questionOptionId: questionOption.questionOptionId,
          userId:  response.userId,
        });
      }
  
      res.status(200).send(responsesArray);
    } catch (err) {
        throw new Error("Response not created",err);
    }
  };
 


module.exports = {
    getQuestionAndOption,
    createResponse
}