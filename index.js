const express = require('express');
const { connectDatabase } = require('./databse/index');
const router = require('./router/index');
const auth = require('./authorization/auth')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()
app.use(dataForVerification)
app.use(router)





var PORT = process.env.PORT || 3000;
// app.listen()
connectDatabase().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connection running at port '+PORT)
    })
})

async function dataForVerification(req,res,next){

    req.context ={

    }
    next()
}