// router
const express = require('express')
const router = express.Router();
const question = require('../controllers/questionController')

router.get('/', question.getQuestions)
router.get('/option',question.getQuestionsOption)


module.exports = router