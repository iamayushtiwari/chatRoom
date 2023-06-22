const User = require("../../../model/user")
module.exports.createSession = function(req,res){
    return res.json({
        status:200,
        message:"Session Created"
    })
}