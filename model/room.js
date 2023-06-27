const mongoose = require('mongoose') 

const roomSchema = new mongoose.Schema({
    roomName: {type: String, required: true, unique: true},
    users: [{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    chats: [{type:mongoose.Schema.Types.ObjectId,ref:'Chats'}]
},{timestamps:true})

const room = mongoose.model('Room',roomSchema)
module.exports = room