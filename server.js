import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "express";
import { register } from "./controllers/user.js";

const app=express();
dotenv.config();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Contact_API",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);


  //home route
  app.get('/',(req,res)=>{
    res.json({message:"this is home route working "})
  })

  //user routes
   //api name: user register
  app.post('/api/user/register',register);



const port=3001;

app.listen(port,()=>{console.log(`server is running at ${port}`)});