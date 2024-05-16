const connection = require('../config/database')


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getBookingcare = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    res.send("Create User Page")
    console.log('>>>Resuls: ', req.body)
}

module.exports = {
    getHomepage,
    getBookingcare,
    postCreateUser
}