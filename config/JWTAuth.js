const jwt = require('jsonwebtoken')
module.exports.auth = async function(req,res,next){
try{
    if(req.header("Cookie") && req.header("Cookie").split('=')[0] == "jwt_token"){
        const token = req.header("Cookie").split('=')[1]; 
        // Authorization: 'Bearer TOKEN'
        if(!token)
        {
            return res.status(403).json({message:"No Token Provided"});
        }
        //Decoding the token
        const decodedToken = jwt.verify(token,"secretKey" );
        // console.log("decoded",decodedToken);
        res.locals.user = decodedToken.name;
        // console.log(decodedToken);   
    }
    else{
        res.redirect('/users/signin')
    }
}catch(err){
    console.log(`********************* ${err}`);
    res.clearCookie("jwt_token");
    res.redirect('/users/signin')
}
next();
}
module.exports.authenticate = function(req,res,next){
    if(req.header("Cookie") && req.header("Cookie").split('=')[0] == "jwt_token"){
        res.redirect('/room/chooseroom')
    }
    next()
}