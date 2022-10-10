const express = require('express');
const { connectDatabase } = require('./databse/index');
const app = express();
const router = require('./router/index');
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()
app.use(router)




const PORT = process.env.PORT || 3000;
// app.listen()
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log('connection running at port '+PORT)
    })
})

async function dataForVerification(req,res){

    req.context ={
        
    }
}