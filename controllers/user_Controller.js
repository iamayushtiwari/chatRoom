const User = require("../model/user")
const jwt = require('jsonwebtoken')

module.exports.signin = function (req, res) {
    return res.render('userSignin', { title: "Signin Page" })
}
module.exports.logout = function (req, res) {
    res.clearCookie("jwt_token");
    return res.redirect("/users/signin")
}
module.exports.signup = function (res, res) {
    return res.render('userSignup', { title: "Signup Page" })
}
module.exports.createUser = async function (req, res) {
    if (req.body.password != req.body.password) {
        return res.redirect('back')
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            await User.create(req.body)
            return res.redirect('/users/signin')
        }
    } catch (error) {
        console.log("Error in createUser", error)
        return res.redirect('back')
    }

}
module.exports.createSession = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: "Invalid User and Password"
            })
        }
        let jwtToken = await jwt.sign({
            _id: user._id,
            email: user.email,
            name: user.name,
        }, 'secretKey', { expiresIn: "1h" })
        res.cookie('jwt_token', jwtToken);
        res.redirect('/room/chooseroom')
    } catch (error) {
        console.log(error)
        return res.json(200, {
            "status": 200,
            "message": `ERROR:${error}`
        })
    }
}