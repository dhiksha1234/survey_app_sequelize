 const models = require('../models/index')


// get all the questions
const getQuestions = async (req, res) => {

    try{

    const question = await models.Question.findAll()
    res.status(200).send(question)
    }
    catch(err){
        return(err);
    }

}

// get - questions and options mapping

const getQuesOption = async (req, res) => {
  try{

    const questionOption = await models.Question.findAll({
        include: [ {
        model: models.Option,
        }
    ]
    })
  
    res.status(200).send(questionOption)
}
  catch(error){
      return(err);
   };
}

  

// get - questionOption for a particular ID 

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
  
    res.status(200).send(questionOption)
}
  catch(error){
      return(err)
  };
}


module.exports = {
    getQuestions,
    getQuestionsOption,
    getQuesOption
}