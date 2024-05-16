const express = require('express')
const { getHomepage, getBookingcare, postCreateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/bookingcare', getBookingcare)
router.post('/create-user', postCreateUser)

module.exports = router;