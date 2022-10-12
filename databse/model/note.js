// const { timeStamp } = require('console');
const mongoose = require('mongoose');
// const userSchema = require('./user')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    workStatus:{
        type:String,
        required:true
    },
    belongsToUser:{
        type:mongoose.Schema.Types.ObjectId ,ref:"User"
    }
},{timestamps:true});

const taskModel = mongoose.model('Task',taskSchema)
module.exports = taskModel;