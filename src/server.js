require('dotenv').config();
const { render } = require('ejs')
const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

configViewEngine(app);

// Khai bao cac route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})