class ChatEngine{
    constructor(chatBoxId,userName,chatRoom){
        this.chatBox = $(`#${chatBoxId}`)
        this.userName = userName;
        this.chatRoom = chatRoom;
        // console.log(userName);
        this.socket = io.connect('http://localhost:5000')
        if(this.userName && this.chatRoom){
            this.connectionHandler();
        }
    }
    connectionHandler(){
        let self = this
        this.socket.on('connect',function(){
            console.log('connection established using sockets..!');
            //emit from client that he want to join specific chat Room
            self.socket.emit('join_room',{
                username:self.userName,
                chatroom:self.chatRoom,
            });

            //on new member joined chat 
            self.socket.on("user_joined", function (data) {
                console.log(`a usered joined ${data.username}`);
            })

        })
        // CHANGE :: send a message on clicking the send message button
        $('#send-message').click(function(){
            let msg = $('#chat-message-input').val();
            console.log();
            if(msg!=''){
                self.socket.emit('send_message',{
                    message:msg,
                    username:self.userName,
                    chatroom:self.chatRoom
                })
            }
        })
        self.socket.on('receive_message',function(data){
            console.log('message Received', data.message);
            if(data.username == self.userName){
                $('.msg_history').append(
                    `<div class="outgoing_msg">
                    <div class="sent_msg">
                      <p>${data.message}</p>
                      <span class="time_date"> 11:01 AM | June 9 | ${data.username}</span>
                    </div>
                  </div>
                </div>`
                )
            }else{
                $('.msg_history').append(
                `<div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="Ayush">
              </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>${data.message}</p>
                  <span class="time_date"> 11:01 AM | June 9 | ${data.username}</span>
                </div>
              </div>
            </div>`
            )
            }
            $('.chat_lastMessage').text(data.message)
            $('#chat-message-input').val('')
        })
    }
}