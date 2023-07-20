const optionModel = require('../models/option')


// get the options for the question
const getOptions = async (req, res) => {

    try{
    let id = req.params.id;
    const options = await optionModel.findAll({})
    console.log("option",options)
    res.status(200).send(options)
    }
    catch(err){
        console.log("Options not found",err)
    }

}

module.exports = {
    getOptions
}