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

  

// get the options based on question

const getQuestionsOption = async (req, res) => {
  try{

    const questionOption = await models.Question.findAll({
      // where: { questionId: 2 },
      include: {
        model: models.Option,
      }
    })

    // const question = await questionModel.findByPk(1);
    // console.log(question)
    // const option = await optionModel.findByPk(3);
    // console.log(option)

    // const questionOption = await question.getOptions({
    //   // where: { optionId: 3 }, // Select only the 'id' from the association table
    //   // plain: true, // To get a single object instead of an array

     // include: { 
      //   model: models.Option,
        // attributes: ['id', 'questionId', 'optionId'], 
        // where: {questionId: 2}
        
    // });
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