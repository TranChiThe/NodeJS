require('dotenv').config();
const { render } = require('ejs')
const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

// config template engine
configViewEngine(app);

// config req.body 
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using query-string library

// Define routes
app.use('/', webRoutes)

// test connection
// connection.query(
//     'SELECT * FROM Users u;',
//     function (err, results, fields) {
//         console.log(">>>Result: ", results);
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})