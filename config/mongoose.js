// getting-started.js
const mongoose = require('mongoose');
const db = mongoose.connection
const uri = "mongodb+srv://iamayushtiwari:uaIcbCh95wbXQPCi@cluster0.z5fgwzr.mongodb.net/?retryWrites=true&w=majority";
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
  // console.log("database loaded")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function(){
    // console.log("connected to DB"); 
})
module.exports=db;