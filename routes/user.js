const express = require('express')
const router = express.Router();
const user = require('../controllers/user')

router.put('/:userId',user.updateUsers)
router.post('/', user.addUser)



module.exports = router