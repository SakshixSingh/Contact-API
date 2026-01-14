import express from "express"
import { deleteContactbyid, getAllContact, getContactbyid, newContact, updateContact } from "../controllers/contact.js";

const router =express.Router();

//new contact
//@api description: creating contact
//@api method :post
//@api endpoint :/api/contact/new
router.post('/new',newContact);

//get all contact
//@api description : 
router.get('/',getAllContact);


//get contact by id
router.get('/:id',getContactbyid);

//update contact by id 
router.put('/:id',updateContact);


//delete contact by id
router.delete('/:id',deleteContactbyid);


export default router