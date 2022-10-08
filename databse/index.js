const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DBUri = process.env.DBUri;

export async function connectDatabase(){

    try{
        await mongoose.connect(DBUri);
        console.log('connection to databse successful')
    }catch (error){
        console.log(error)
    }

}
