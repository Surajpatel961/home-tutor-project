import express from "express"
import connectDB from "./config/db.js";
import app from "./app.js";
import dotenv from "dotenv"
import cloudinary from "./config/cloudinary.js";

dotenv.config();

const port = process.env.PORT;

async function  startServer() {
    try{
        await connectDB();
        app.listen(port , () =>{
        console.log( `server is runing on port ${port}` )
}) 
    }catch(e){
        console.log(e)
    }
}

startServer();

