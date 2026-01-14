import express from "express"
import { register,login } from "../controllers/user.js";
import { User } from "../models/User.js";

const router =express.Router();

//user register
//@api description: user register
//@api method :post
//@api endpoint :/api/user/register
router.post('/register',register)

//user login
//@api desciption : user login
//@api method : post
//@api endpoint : /api/ser/login
router.post('/login',login)

export default router;
