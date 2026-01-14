import express from "express"
import { deleteContactbyid, getAllContact, getContactbyid, getContactbyUserid, newContact, updateContact } from "../controllers/contact.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router =express.Router();

//new contact
//@api description: creating contact
//@api method :post
//@api endpoint :/api/contact/new
router.post('/new',isAuthenticated,newContact);

//get all contact
//@api description : 
router.get('/',getAllContact);


//get contact by id
router.get('/:id',getContactbyid);

//update contact by id 
router.put('/:id',isAuthenticated,updateContact);


//delete contact by id
router.delete('/:id',isAuthenticated,deleteContactbyid);

//get user specific contact 
router.get('/userid/:id',getContactbyUserid);


export default router