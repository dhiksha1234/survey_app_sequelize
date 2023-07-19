const userModel = require('../models/user')


// get all the users logged in 
const getUsers = async (req, res) => {

    try{
    let id = req.params.id;
    const users = await userModel.findAll({})
    console.log("users",users)
    res.status(200).send(users)
    }
    catch(err){
        console.log("Users not found",err)
    }

}

module.exports = {
    getUsers
}