const mongoose = require('mongoose');
const taskModel = require('../databse/model/note');


async function getAllUserNotePopulate(req,res){
    let userId = req.context.user[0]._id;
    try {
        // {'belongsToUser':userId}
        let userNote = await taskModel.find().populate('belongsToUser')
        //  .then(res=>{console.log('res',res);return})
        //  .then(data=>console.log('populate data',data))
        
        // res.send(userNotes)
        res.send({userNote})
        return
    } catch (error) {
        console.log('error',error)
        // res.send({error})
        res.send({status:'error occured in fetching user all notes'})
    }

}


async function getAllUserNote(req,res){
    let userId = req.context.user[0]._id;
    try {
        let userNotes = await taskModel.find({'belongsToUser':userId})

        res.send(userNotes)
        return
    } catch (error) {
        res.send({status:'error occured in fetching user all notes'})
    }

}

async function createNote(req,res){
    let noteToBeCreated = req.body; 
    console.log(req.context.user)
    let belongsToUser = mongoose.Types.ObjectId(req.context.user[0]._id);

    try {
        await taskModel.create({...noteToBeCreated,belongsToUser})
        res.send({status:'Note created'})

    } catch (error) {
        res.send({status:'error occured during creating note'})
    }
}

module.exports = {
    getAllUserNote,
    createNote,
    getAllUserNotePopulate

}