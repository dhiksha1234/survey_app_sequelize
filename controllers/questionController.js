 const models = require('../models/index')


// get all the questions
const getQuestions = async (req, res) => {

    try{

    const question = await models.Question.findAll()
    res.status(200).send(question)
    }
    catch(err){
        console.log(err)
    }

}

  

// get - questions and options mapping

const getQuestionsOption = async (req, res) => {
  try{

    const questionOption = await models.Question.findAll({
      where: { questionId : req.params.questionId},
       include: [ {
        model: models.Option,
        where: { optionId : req.params.optionId}
       }
    ]
    })
    const questionOptionId = questionOption[0].Options[0].Question_Option.questionOptionId;
    console.log("Question Option ID:", questionOptionId);
 
 
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