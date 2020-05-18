const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router      .get('/', userController.getUser)
            .post('/login', userController.loginUser)

module.exports = Router;