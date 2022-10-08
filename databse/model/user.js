const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // ,
    // belongsToNotes:{
    //     type:mongoose.Types.ObjectId,ref:"Task"
    // }
}
,
{timestamps:true}
,
{
    timeseries:{
        timeField:'timestamp_property'
    }
}
)
const userModel = mongoose.model("User",userSchema);

module.exports = userModel;