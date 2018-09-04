const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const defaultRouter = require('./routes/default');
const bodyParser = require('body-parser');
const regRouter = require('./routes/regRouter');


mongoose.connect(config.mongoURL, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// the index and def routes.
app.use('/', defaultRouter);
app.use('/', regRouter);


app.listen(config.port, (req, res) => {
    console.log(`App running on ${config.port}`);
});

