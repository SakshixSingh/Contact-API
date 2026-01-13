 import { User } from "../models/User.js";
 import bcrypt from "bcrypt"

 
 export const register = async(req,res)=>{
      const {name,email,password}=req.body;
      if(name=="" || email=="" || password=="") return res.json({
        massage:"All fields are required"
      })
    let user=await User.findOne({email})
    if(user) return res.json({message:"User already exist..",success:false});

     //saving user to database 
     //encrypting the password using bcrypt
      const hashpassword= await bcrypt.hash(password,10);
     user=await User.create({name,email,password:hashpassword});
      res.json({message:"User created succesfully",success:true,user})
  }