// router
const question = require('express').Router()

router.get('/question', question.getQuestions)

module.exports = router