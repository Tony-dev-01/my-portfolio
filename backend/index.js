'use strict';

const express = require("express");
const morgan = require('morgan');
const cors = require("cors");

const {getIntroduction, getAbout} = require("./queries");
const port = 3000;




express()
.use(function(req, res, next) {
    res.header(
        'Access-Control-Allow-Methods',
        'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
    })

.use(morgan('tiny'))
.use(express.json())
.use(cors())

.get('/', (req, res) => {
    res.send("Hello from our server!");
})

.get('/introduction', getIntroduction)
.get('/about', getAbout)

// Catch all
.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'This is a catch all. Wrong endpoint. Verify if you are using a valid endpoint.' 
    })
})

.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
