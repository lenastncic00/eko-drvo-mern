const mongoose = require('mongoose');

var mongoURL='mongodb+srv://lenastancic:Autobus1@cluster0.xsfxm.mongodb.net/eko-drvo'


mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports=mongoose