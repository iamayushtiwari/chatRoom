const mongoose = require('mongoose') 

const chatsSchema = new mongoose.Schema({
    message: {type: String, required: true,},
    users: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    rooms:{type:mongoose.Schema.Types.ObjectId,ref:'Room'},
},{timestamps:true})

const room = mongoose.model('Chat',chatsSchema)
module.exports = room