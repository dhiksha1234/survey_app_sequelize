const questionModel = require('../models/question')
const optionModel = require('../models/option')
const Question_Option = require('../models/question_option')

// get all the questions
const getQuestions = async (req, res) => {

    try{

    const question = await questionModel.findAll({})
    res.status(200).send(question)
    }
    catch(err){
        console.log(err)
    }

}

  

// get the options based on question

const getQuestionsOption = async (req, res) => {
  try{

const questionOption = await questionModel.findAll({
  // where: { questionId: 2 },
  include: { 
    model: optionModel,
    // attributes: ['id', 'questionId', 'optionId'], 
    // where: {questionId: 2}
   },
 })
 console.log(questionOption)
  res.status(200).send(questionOption)
}
  catch(error){
    console.error(error);
  };
}


module.exports = {
    getQuestions,
    getQuestionsOption
}