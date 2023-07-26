const express = require('express')
const router = express.Router();
const option = require('../controllers/option')

router.get('/', option.getOptions)


module.exports = router