const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://procolofalanga96:Zanetti.496@cluster0.je5afre.mongodb.net/mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=> {
    console.log('Mongo DB connection failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB connection successful')
})

module.exports = mongoose