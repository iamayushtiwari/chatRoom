const passport  = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require('../model/user');

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey'
}
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    let user = await User.findById(jwt_payload._id)
    if(user){
        return done(null,user)
    }else{
        return done(null,false)
    }
}))
// //serializing the user to decide which key is to be kept in the cookies
// passport.serializeUser(function(user,done){
//     done(null,user.id)
// })

// //deserializing the user fron the key in the cookies
// passport.deserializeUser(function(id,done){
//     User.findById(id).then(user=>{
//         return done(null ,user);
//     }),function(err){
//         console.log(err)
//     }
// })

// //check if the user is authenticated ..... this is Middleware
// passport.checkAuthentication = function(req,res,next){
//     //if the user is signedin 
//     if(req.isAuthenticated()){
//         return next();
//     }
//     //if the user is not signed in
//     return res.redirect('/users/signin')
    
// }

// passport.setAuthenticatedUser = function(req,res,next){

//     if(req.isAuthenticated()){
//         res.locals.user = req.user
//     }
//     next()
// }
module.exports = passport;