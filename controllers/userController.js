const models = require('../models/index')


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
        console.error("Cant add user")
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

        res.status(200).send("user completed the survey")
    }
    catch(err){
        console.error("Updated the users - isComplete")
    }

}


module.exports = {
    updateUsers,
    addUser
}