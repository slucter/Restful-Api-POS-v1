const connection = require('../config/DB');

module.exports = {

    getUser: ()=>{
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user", (err, result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    loginUser : (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM user WHERE username = ?",data, (err, result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    }
}