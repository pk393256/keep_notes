const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DBUri = process.env.DBUri 
// || 'mongodb://localhost:27017/Note';
async function connectDatabase(){

    try{
        await mongoose.connect(DBUri);
        console.log('connection to databse successful')
    }catch (error){
        console.log('error',error)
    }

}
module.exports={
    connectDatabase,
}
