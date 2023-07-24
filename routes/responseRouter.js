// router
const express = require('express')
const router = express.Router();
const response = require('../controllers/responseControllers')


router.get('/',response.getResponses)   // get all the responses of all users
router.get('/userId/:userId', response.getResponsesOfOneUser) // get responses of a particular user
router.get('/questionOptionId/:questionOptionId', response.getResponseForQuestion) // get responses of a particular questionOptionId

// router.put('/questionId/:questionId/userId/:userId/questionOptionId/:questionOptionId',response.updateResponses)



router.get('/questionId/:questionId/userId/:userId/questionOptionId/:questionOptionId', response.getQuestionResponses)
// router.post('/:userId/:questionOptionId',response.createResponses);
 

module.exports = router