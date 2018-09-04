const express = require('express');
const regRouter = express.Router();
const registerUser = require('../controllers/userReg');

regRouter.get('/register', (req, res) => {
    res.send({ msg: "This endpoint only returns substantial data with a POST request." })
});

regRouter.post('/register', (req, res) => {

    try {
        registerUser(req);
        res.send({ msg: "registered a user" });
    }
    catch (err) {
        throw err;
        res.send({ msg: "Failed to register user" })
    }

});


module.exports = regRouter;