const mongoose = require("mongoose");
const dbgr= require("debug")("development:Mongoose");
const config=require('config');

//To show the debugs in Powershell terminal use 
//          -------  ` $env:DEBUG="development:*"; `
//To show the debugs in CMD terminal use 
//          -------  ` set DEBUG=development:* `



mongoose.connect(`${config.get("MONGODB_URI")}/Bag-Website`)
.then(function(){
    dbgr("Connected");
}).catch(function(err){
    dbgr(err);
})


module.exports=mongoose.connection;
