const mongoose = require('mongoose')

require('dotenv').config();
const uri = process.env.MONGO_URI;

mongoose.connect(url);

const connection = mongoose.connection

connection.on('error',err=>console.log(err + "not connected"))
connection.on('connected',()=>console.log("monogo db connected"))
