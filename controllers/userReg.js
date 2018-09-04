const bcrypt = require('bcrypt');
const user = require('../models/user');

/***
 * @param req - The request obj so the function can modify the data
 */

function registerFreshUser(req) {

    let username = req.query.username;
    let email = req.query.email;

    let pswrd = bcrypt.hashSync(req.query.password, 8);

    let tempUsr = new user({
        username: username,
        email: email,
        password: pswrd,
    });

    tempUsr.save((err, user) => {
        if (err) throw err;
        console.log({
            username: `${user.username} saved`
        })
    });


}

module.exports = registerFreshUser