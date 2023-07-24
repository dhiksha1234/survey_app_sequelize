const models = require('../models/index')


// get all the users logged in 
const getUsers = async (req, res) => {

    try{
    const users = await models.User.findAll({})
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
    const users = await models.User.create(data)
    console.log(users)
    res.status(200).send(users)
    }
    catch(err){
        console.log("Cant add user",err)
    }

}

// see if the user is there

const checkUsers = async (req, res) => {

    try{
    const users = await models.User.findAll({
        where:{
            name:req.params.name
        }
    })
    if(users.length > 0){
        console.log("user is there")
    }else{
        console.log("user is not in the db")
    }
 
    res.status(200).send(users)
    }
    catch(err){
        console.log("Users not there",err)
    }

}

// update isComplete

const updateUsers = async (req, res) => {

    try{
        const updatedIsComplete = await models.User.update(
            { isCompleted: true }, 
            {
              where: {
                userId: req.params.userId,
              },
            }
            
          );

          const users = await models.User.findAll({
            where:{ userId : req.params.userId}
        })
        console.log(users)

        res.status(200).send(users[0].isCompleted)
    }
    catch(err){
        console.log("Updated the users - isComplete",err)
    }

}


    


module.exports = {
    getUsers,
    addUser,
    checkUsers,
    updateUsers
}