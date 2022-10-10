const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

async function auth(req,res,next){
    

}