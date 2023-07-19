const questionModel = require('../models/question')
const optionModel = require('../models/option')

// for all the questions
const getQuestions = async (req, res) => {

    try{
    const question = await questionModel.findAll({})
    res.status(200).send(question)
    }
    catch(err){
        console.log(err)
    }

}

// get the options for the question
const getOptions = async (req, res) => {

    try{
    const options = await optionModel.findAll({where:{ questionId: 1}})
    res.status(200).send(question)
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    getQuestions,
    getOptions
}