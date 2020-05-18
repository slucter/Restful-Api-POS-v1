const userModel = require('../Model/userModel');
const jwt = require('jsonwebtoken');

module.exports = {

    getUser: (req, res)=>{
        userModel.getUser()
        .then((result)=>{
            res.send(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    loginUser: (req, res)=>{
        const { username, password } = req.body;
        const data ={
            username,
            password
        }
        userModel.loginUser(data.username)
        .then((result)=>{
            if(result.length >= 1){
                let datauser = result[0];
                let token = jwt.sign({ id: datauser.id, email: datauser.email}, 'ganteng');
                datauser.token = token;
                delete datauser.password;
                res.send(datauser)
            }else{
                res.send('User doesnt exist');
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}