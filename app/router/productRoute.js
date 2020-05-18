const express = require('express');
const Router = express.Router();
const cors = require('cors');
const productController = require('../controller/productController');

Router  .get('/', productController.getAllProduct)
        .post('/add',cors(),productController.createProduct)
        .patch('/:id_product', productController.updateProduct)

module.exports = Router;