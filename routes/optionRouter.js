const express = require('express')
const router = express.Router();
const option = require('../controllers/optionController')

router.get('/', option.getOptions)


module.exports = router