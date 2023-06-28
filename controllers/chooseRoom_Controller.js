const { populate } = require('../model/chats')
const Room = require('../model/room')
module.exports.chooseChatRoom = function (req, res) {
    return res.render('chooseRoom', { title: "choose Room" })
}
module.exports.redirectTOHome = async function (req, res) {
    let CurrentRoom
    try {
        // console.log(res.locals.user); 
        let room = await Room.findOne({ roomName: req.body.roomname })
            .sort('-createdAt')
            .populate({
                path: 'users'
            })
            .populate({
                path: 'chats',
                populate :{
                    path:'users'
                },
            });
    
        if (room) {
            try{
                let ifuser = room.users.find(usr => usr._id == res.locals.user._id)
                if(!ifuser){
                    await room.users.push(res.locals.user)
                    await room.save();
                }
            }catch(err){
                console.log(err);
            }
            CurrentRoom=room;
        } else {
            console.log('new Room created');
              let newRoom =  await Room.create({
                roomName:req.body.roomname,
                users:[res.locals.user],
                chats: []
               })
               newRoom.save()
               CurrentRoom=newRoom;
        }
    } catch (err) {
        console.log(err);
    }
    // return res.json(CurrentRoom)
    return res.render('home', { title: "Home Page", roomName: req.body.roomname ,room:CurrentRoom})
}