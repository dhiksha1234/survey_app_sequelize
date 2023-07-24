const models = require('../models/index')


// get - all response 
const getResponses = async (req, res) => {

    try{
    const response = await models.Response.findAll({
        include: [{
          model:  models.Question_Option,
         },
        {
            model: models.User,
        }
    ]})
    res.status(200).send(response)
    }
    catch(err){
        console.log("Responses are not fetched",err)
    }

}

// get - response of a particular questionOption
const getResponseForQuestion = async (req, res) => {

    try{
    const response = await models.Response.findAll({
        include: [{
          model:  models.Question_Option,
          where: { questionOptionId : req.params.questionOptionId}
         },
        {
            model: models.User,
        }
    ]})
    res.status(200).send(response)
    }
    catch(err){
        console.log("Responses for questionOption are not fetched",err)
    }

}

// get - responses of a particular user
const getResponsesOfOneUser = async (req, res) => {

    try{
    const response = await models.Response.findAll({
        include: [{
          model:  models.Question_Option,
         },
        {
            model: models.User,
            where: { userId : req.query.userId}
        }
    ]})
    res.status(200).send(response)
    }
    catch(err){
        console.log("Responses are not fetched",err)
    }

}
 

// response updated if there , else create 
const getQuestionResponses = async (req, res) => {

    try{
    const response = await models.Response.findOne({
        include: [{
          model:  models.Question_Option,
          where: { questionId : req.params.questionId}
        },
        {
            model: models.User,
            where: { userId : req.params.userId}
        }
    ]
        
    })
 
    if(response){
        console.log("user already answered the question . so need to update it ", response.length)
        // updating the existing response
        try{

        response.update( { questionOptionId: req.params.questionOptionId })
        } catch(err){
            console.log("error in updating")
        }
         
    }else{

        // creating a new response
        let data = {
            userId: req.params.userId,
            questionOptionId: req.params.questionOptionId, 
        }
    
        try{
        const response = await models.Response.create(data);
        res.status(200).send(response)
        }
        catch(err){
            console.log("Responses are not created",err)
        }
        
    }
    res.status(200).send(response)
    }
    catch(err){
        console.log("Responses are not fetched",err)
    }

}

// update the response

// const updateResponses = async (req, res) => {

//     try{
//         const updatedResponse = await models.Response.update(
//             { questionOptionId: req.params.questionOptionId }, {
//             include: [{
//                 model: models.Question,
//                 through: { model: models.Question_Option }, // Correct the through association for many-to-many
//                 where: { id: req.params.questionId },
//               },
//               {
//                   model: models.User,
//                   where: { userId : req.params.userId}
//               }
//           ]}
            
//           );

//           const users = await models.Response.findAll({
//             where:{ userId : req.params.userId}
//         })
//         console.log(users)

//         res.status(200).send(users)
//     }
//     catch(err){
//         console.log("Updated the response - ",err)
//     }
// }


// create a response for each user

// const createResponses = async (req, res) => {

//     let data = {
//         userId: req.params.userId,
//         questionOptionId: req.params.questionOptionId, 
//     }

//     try{
//     const response = await models.Response.create(data);
//     res.status(200).send(response)
//     }
//     catch(err){
//         console.log("Responses are not created",err)
//     }
// }


module.exports = {
    getResponses,
    getQuestionResponses,
    getResponsesOfOneUser,
    getResponseForQuestion,
 }