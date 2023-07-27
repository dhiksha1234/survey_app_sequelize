const express = require('express')
const router = express.Router();
const question = require('../controllers/questionOption')

router.get('/', question.getQuestionAndOption)
router.post('/',question.createResponse)
 

module.exports = router