const userModel = require('../models/user')


// get all the users logged in 
const getUsers = async (req, res) => {

    try{
    const users = await userModel.findAll({})
    res.status(200).send(users)
    }
    catch(err){
        console.log("Users not found",err)
    }

}

// post - add user

const addUser = async (req, res) => {

    let data = {
        name: req.body.name
    }

    try{
    const users = await userModel.create(data)
    console.log(users)
    res.status(200).send(users)
    }
    catch(err){
        console.log("Cant add user",err)
    }

}

module.exports = {
    getUsers,
    addUser
}