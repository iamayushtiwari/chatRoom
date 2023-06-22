const User = require("../model/user")


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