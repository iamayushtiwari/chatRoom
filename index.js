const express = require('express')
const path = require('path')
const port = 8000
const app = express();
const expresslayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
// const passportJWTStrategy = require('./config/passport-jwt-strategy')
const db = require('./config/mongoose')
const user = require('./model/user')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.listen(port,err =>{
    if(err){
        console.log("Error: ", err)
    }
    console.log(`server is runing on port ${port}`)
})
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static('./assets'))
app.use(expresslayout)
app.use('/',require('./router'))