require('dotenv').config();
const mysql = require('mysql2/promise');

// Create the connection to database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,           // default: empty
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,           // default: 3306
    password: process.env.DB_PASSWORD,
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;