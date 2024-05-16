const express = require('express')
const { getHomepage, postCreateUser, getCreateUser, getUpdateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
// Create users
router.get('/create', getCreateUser)
router.post('/create-user', postCreateUser)
//Update Users
router.get('/update/:userID', getUpdateUser)

module.exports = router;