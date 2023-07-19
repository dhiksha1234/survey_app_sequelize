// router
const express = require('express')
const router = express.Router();
const question = require('../controllers/responseControllers')

router.get('/', question.getResponses)


module.exports = router