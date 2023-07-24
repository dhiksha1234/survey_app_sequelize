const models = require('../models/index')


// get the options for the question
const getOptions = async (req, res) => {

    try{
    const options = await models.Option.findAll({})
     res.status(200).send(options)
    }
    catch(err){
        console.log("Options not found",err)
    }

}

module.exports = {
    getOptions
}