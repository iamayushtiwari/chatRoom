const express = require('express')
const path = require('path')
const port = 8000
const app = express();
const expresslayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const db = require('./config/mongoose')
const user = require('./model/user')
var cors = require('cors')

app.use(cors({origin:'*'}))

const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer)
chatServer.listen(5000)


 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static('./assets'))
app.use(expresslayout) 
app.use(session({
    name: "chatRoom",
    secret: "H@MbQeThWm",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 1000 * 100
    },
    store: new  MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },
        function(err){
            console.log(err || "connect-mongodb setup ok...!")
        }
    )
}))

app.use('/',require('./router'))


app.listen(port,err =>{
    if(err){
        console.log("Error: ", err)
    }
    console.log(`server is runing on port ${port}`)
})