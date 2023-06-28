const jwt = require('jsonwebtoken')
module.exports.auth = async function(req,res,next){
    if (req.header('Cookie') && req.header('Cookie').split('=')[0] === 'jwt_token') {
        const token = req.header('Cookie').split('=')[1];
        // Authorization: 'Bearer TOKEN'
        if (!token) {
            return res.status(403).json({ message: 'No Token Provided' });
        }
        // Decoding the token
        try {
            const decodedToken = jwt.verify(token, 'secretKey');
            res.locals.user = decodedToken;
            res.locals.name = decodedToken._id;
            next();
        } catch (err) {
            res.clearCookie("jwt_token");
            return res.status(401).json({ message: 'Invalid Token' });
        }
    } else {
        res.redirect('/users/signin');
    }
}
module.exports.authenticate = function(req,res,next){
    if(req.header("Cookie") && req.header("Cookie").split('=')[0] == "jwt_token"){
        res.redirect('/room/chooseroom')
    }
    next()
}