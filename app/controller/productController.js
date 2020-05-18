const productModel = require('../Model/productModel');
module.exports = {
    getAllProduct: (req, res) => {
        productModel.getAllProductModel()
        .then((result) => {
            res.status(200).json({
                status: 200,
                msg: 'Success',
                response: result,
            })
        })
        .catch((response) =>{
            console.log(response);
        })
    },
    createProduct: (req, res) => {
        const { id_category, title, image, price } = req.body;
        const data = {
            id_category,
            title,
            image,
            available: 1,
            price,
            created_at: new Date(),
        }
        productModel.createProductModel(data)
        .then((result) => {
            res.status(200).json({
                status: 200,
                msg: 'Success add menu!',
                response: result,
            })
        })
        .catch((response) =>{
            console.log(response);
        })
    },
    updateProduct: (req, res) => {
        const id_prod = req.params.id_product
        const { id_category, title, image, price, available} = req.body;
        const data = {
            id_category,
            title,
            image,
            price,
            available,
        }

        productModel.updateProductModel(id_prod, data)
        .then((result) => {
            res.status(200).json({
                status: 200,
                msg: 'Success update book!',
                response: result,
            })
        })
        .catch((response) =>{
            console.log(response);
        })
    }
}