// router
const express = require('express')
const router = express.Router();
const response = require('../controllers/response')


router.get('/',response.getResponses) 
  

module.exports = router