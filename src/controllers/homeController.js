const connection = require('../config/database');
const { param } = require('../routes/web');
const { getAllUsers } = require('../service/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    // console.log('>>>Results: ', results)
    return res.render('home.ejs', { listUsers: results })
}

const getBookingcare = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    // console.log('>>>Resuls: ', req.body)
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;
    // let {email, name, city} = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city]
    )
    console.log('>>>Check result', results)
    res.send("Created user succeed")
}

const getCreateUser = (req, res) => {
    res.render('create.ejs');
}
const getUpdateUser = async (req, res) => {
    const userID = req.params.userID;
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [userID]);
    let user = results && results.length > 0 ? results[0] : {};
    res.render('edit.ejs', { userEdit: user });
}

module.exports = {
    getHomepage,
    postCreateUser,
    getCreateUser,
    getUpdateUser
}