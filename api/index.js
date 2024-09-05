import express from "express";
<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
 .connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("conncected to database");
 })
 .catch((err)=>{
    console.log(err);
 })
=======
>>>>>>> cf2e05fa683f53e7f205081e265c373863bea1fc

const app = express();

app.listen(3000,()=>{
    console.log('Server listing to post 3000');
})


