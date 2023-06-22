const User = require("../../../model/user")
const jwt = require('jsonwebtoken')
module.exports.createSession = async function(req,res){
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user || user.password != req.body.password){
            return res.json(422,{
                message :"Invalid User and Password"
            })
        }
        return res.json(200,{
            message:"signin Successfully here is your token",
            data:{
                token:jwt.sign(user.toJSON(),'secretKey',{expiresIn:'1000000000'}),   
            }
        })
    }catch(error){
        console.log(error)
        return res.json(200,{
            "status": 200,
            "message":`ERROR:${error}`
        })
    }
}