const express = require('express');
const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
    res.send({msg:"HELLO AND WELCOME TO MY API"})
});

module.exports = defaultRouter;