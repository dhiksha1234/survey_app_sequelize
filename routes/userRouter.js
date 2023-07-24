const express = require('express')
const router = express.Router();
const user = require('../controllers/userController')

router.get('/', user.getUsers)
router.post('/',user.addUser)
router.get('/:name',user.checkUsers)
router.put('/:userId',user.updateUsers)



module.exports = router