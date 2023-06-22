const User = require("../model/user")
const jwt = require('jsonwebtoken')

module.exports.signin = function(res,res){
    return res.render('userSignin',{title:"Signin Page"})
}

module.exports.signup = function(res,res){
    return res.render('userSignup',{title:"Signup Page"})
}
module.exports.createUser = async function(req,res){
    if(req.body.password != req.body.password){
        return res.redirect('back')
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user){
           await User.create(req.body)
           return  res.redirect('/users/signin')
        }
    }catch(error){
        console.log("Error in createUser", error)
        return res.redirect('back')
    }

}
module.exports.createSession = async function(req,res){
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user || user.password != req.body.password){
            return res.json(422,{
                message :"Invalid User and Password"
            })
        }
        let jwtToken = jwt.sign(user.toJSON(),'secretKey',{expiresIn:'1000000000'})
        //res.set('Authorization', `Bearer ${jwtToken}`);

        res.cookie('token', jwtToken, { httpOnly: true, secure: true });
        return res.json(200,{
            message:"signin Successfully here is your token",
            data:{
                token:jwtToken,
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
module.exports.test = function(req, res){
    return res.json({
        status : 'successfull',
    })
}