const models = require('../models/index')


// get all the options 
const getOptions = async (req, res) => {

    try{
    const options = await models.Option.findAll({})
     res.status(200).send(options)
    }
    catch(err){
        console.error("Options not found")
    }

}

module.exports = {
    getOptions
}