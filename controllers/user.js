const models = require('../models/index')


// post - add user

const addUser = async (req, res) => {

    let userName = {
        name: req.body.name
    }

    try{
    const users = await models.User.create(userName)
    res.status(200).send(users)
    }
    catch(err){
        return(err)
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
 
        res.status(200).send("user completed the survey")
    }
    catch(err){
        return(err)
    }

}


module.exports = {
    updateUsers,
    addUser
}