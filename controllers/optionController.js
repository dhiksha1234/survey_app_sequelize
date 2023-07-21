const db = require('../models/index')
// const models = require('../models/index')


// get the options for the question
const getOptions = async (req, res) => {

    try{
    const options = await db.Option.findAll()
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