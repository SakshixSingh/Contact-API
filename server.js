import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";



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

  //user router
app.use("/api/user", userRouter);

//contact router
app.use("/api/contact",contactRouter);






const port=3001;

app.listen(port,()=>{console.log(`server is running at ${port}`)});