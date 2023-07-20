const questionModel = require('../models/question')
const optionModel = require('../models/option')

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

// association 



const getQuestionsOption = async (req, res) => {

const questionOption = await questionModel.findAll({
  where: { questionId: 4 },
  include: [{ model: optionModel }],
})
  res.status(200).send(questionOption)
  .catch((error) => {
    console.error(error);
  });
}


module.exports = {
    getQuestions,
    getQuestionsOption
}