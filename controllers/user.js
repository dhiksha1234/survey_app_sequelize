const models = require('../models/index')


// post - to add a user
// Only the userIds which are in the users table ,will be able to able to post the response

const addUser = async (req, res) => {

    let userName = {
        name: req.body.name
    }

    try{
    const users = await models.User.create(userName)
    res.status(200).send(users)
    }
    catch(err){
        throw new Error("Error in creating users",err);
    }

}

module.exports = {
    addUser
}