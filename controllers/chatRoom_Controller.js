module.exports.chooseChatRoom = function(req,res){
    return res.render('chooseRoom',{title:"choose Room"})
}
module.exports.redirectTOHome = function(req,res){
    // console.log("Redirecting to home")
    // console.log(req.body.roomname);
    // res.locals.roomname = req.body.roomname
    // console.log(res.locals.roomname);
    return res.render('home',{title:"Home Page",roomName:req.body.roomname})
}