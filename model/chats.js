const mongoose = require('mongoose') 

const chatsSchema = new mongoose.Schema({
    message: {type: String, required: true,},
    users: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
},{timestamps:true})

const room = mongoose.model('Chats',chatsSchema)
module.exports = room