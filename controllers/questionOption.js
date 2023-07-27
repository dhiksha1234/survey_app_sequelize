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
    catch(err){
        return(err);
    }

}

 


module.exports = {
    getQuestionAndOption,
}