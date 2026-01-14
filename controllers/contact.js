import { Contact } from "../models/Contact.js";



//get all contact

export const getAllContact=async(req,res)=>{
    const userContact=await Contact.find();

    if(!userContact) res.json({message:"no contact find",success:false});

    res.json({message:"All user fetched",userContact,success:true});
}


//create new contact

export const newContact=async (req,res)=>{
    const {name,email,phone,type}=req.body;

    if(name=="" || email=="" || phone =="" || type=="") 
        return res.json({message:"all fileds are required",success:false});

    let saveContact =await Contact.create({
        name,email,phone,type
    });

res.json({message:"Contact saved successfully..!",saveContact,success:true});

}

//update contact by id
export const updateContact=async(req,res)=>{
    const id=req.params.id;

    const {name ,email,phone ,type}=req.body;

    let updatedContact=await Contact.findByIdAndUpdate(id,{

    },{new:true})

    if(!updatedContact) return res.json({message:"No Contact Exist",success:false})

    res.json({message:"Contact Updated Succesfully..!",success:true});    

}

//get contact by id

export const getContactbyid=async(req,res)=>{
    const id=req.params.id;
    const userContact=await Contact.findById(id);
    if(!userContact) return res.json({message:"No Contact find",success:false});

    return res.json({message:"Contact Fetched",userContact,success:true});
}

//delete contact by id

export const deleteContactbyid=async(req,res)=>{
    const id=req.params.id;


    let deleteContact=await Contact.findByIdAndDelete(id)

 
    if(!deleteContact) return res.json({message:"No Contact Exist",success:false})

    res.json({message:"Contact Deleted Succesfully..!",success:true}); 
}