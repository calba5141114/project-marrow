const bcrypt = require('bcrypt');
const user = require('../models/user');


// converts the request object and params into a user obj then saves it.
function registerFreshUser(req) {

    let pswrd = bcrypt.hashSync(req.query.password, 8);

    let tempUsr = new user({
        username: req.query.username,
        email: req.query.email,
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