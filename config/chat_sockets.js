const User = require('../model/user')
const Rooms = require('../model/room')
const Chats = require('../model/chats')

module.exports.chatSockets = function (socketServer) {
    let io = require('socket.io')(socketServer)
    io.sockets.on('connection', function (socket) {
        console.log('new Connection received', socket.id);

        socket.on('disconnect', function (socket) {
            console.log('socket disconnect:', socket);
        })

        //join room
        socket.on('join_room', async function (data) {
            console.log(`joining request rec. ${data.chatroom} ${data.username}`);
            socket.join(data.chatroom)

            //emit all of users in room that someone join the current room
            io.in(data.chatroom).emit('user_joined', data)
        })
        //if the user is typing brodcast
        socket.on("typing", async data => {
            console.log(`${data.username} is typing....`)
            io.in(data.chatroom).emit('typing', data);
        })

        //CHANGE :: detect send_message and broadcast to everyone in the room
        socket.on('send_message', function (data) {
            console.log(`Data on server ${data.message}`);
            io.in(data.chatroom).emit('receive_message', data);
        })
    })

}