const express = require('express')
const router = express.Router();
const question = require('../controllers/question')

router.get('/', question.getQuestions)
router.get('/option/:questionId/:optionId',question.getQuestionsOption)


module.exports = router