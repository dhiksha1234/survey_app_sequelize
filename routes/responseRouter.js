// router
const express = require('express')
const router = express.Router();
const response = require('../controllers/responseControllers')


router.get('/',response.getResponses)   // get all the responses of all users
router.post('/',response.createResponse);
 

module.exports = router