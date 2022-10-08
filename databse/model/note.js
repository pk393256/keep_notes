const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    workStatus:{
        type:String,
        required:true
    },
    belongsTo:{
        type:mongoose.Types.ObjectId ,ref:"User"
    }
})