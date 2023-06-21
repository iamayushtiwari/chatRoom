module.exports.sigin = function(res,res){
    return res.render('userSignin',{title:"Signin Page"})
}

module.exports.sigup = function(res,res){
    return res.render('userSignup',{title:"Signup Page"})
}