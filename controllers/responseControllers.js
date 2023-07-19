const responseModel = require('../models/response')
 

// for all the questions
const getResponses = async (req, res) => {

    try{
    const response = await responseModel.findAll({})
    res.status(200).send(response)
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    getResponses
}