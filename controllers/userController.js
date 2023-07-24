const models = require('../models/index')


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
    updateUsers
}