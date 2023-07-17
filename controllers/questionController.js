const questionModel = require('../models/question')

const getQuestions = async (req, res) => {

    const question = await questionModel.findAll({})
    res.status(200).send(question)

}

module.exports = {
    getQuestions
}