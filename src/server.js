const { render } = require('ejs')
const express = require('express')
// const { hostname } = require('os')
const path = require('path')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
require('dotenv').config();

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Khai bao cac route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/bookingcare', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})