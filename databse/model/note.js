// const { timeStamp } = require('console');
const mongoose = require('mongoose');

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
        type:mongoose.Types.ObjectId ,ref:"User"
    }
},{timestamps:true});

const taskModel = mongoose.taskSchema('Task',taskSchema)
module.exports = taskModel;