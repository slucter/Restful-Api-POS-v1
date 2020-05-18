const express = require('express');
const Router = express.Router();
const product = require('./productRoute');
const user = require('./userRoute');

Router  .use('/product', product)
        .use('/user', user)

module.exports = Router;