module.exports.chooseChatRoom = function(req,res){
    return res.render('chooseRoom',{title:"choose Room"})
}
module.exports.redirectTOHome = function(req,res){
    return res.render('home',{title:"Home Page",roomName:req.body.roomname})
}