module.exports.welcome = function(req,res){
    return res.render('welcomePage',{title:"Welcome To ChatRoom"})
}