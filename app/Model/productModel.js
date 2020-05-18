const connection = require('../config/DB');
module.exports = {
    getAllProductModel: () => {
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM product", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    createProductModel: (data) => {
        return new Promise((resolve, reject) =>{
            connection.query("INSERT INTO product SET ? ",data, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateProductModel: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE product SET ? WHERE id= ?", [data, id], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    }
}