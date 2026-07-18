const express=require('express');
const app=express();
const noteModel=require('./models/notes.model')
app.use(express.json())
const notes=[]
app.post('/notes',async(req,res)=>{
const {title, description}=req.body;
 const note=await noteModel.create({
    title,description
})
res.status(201).json({
    message:"note create successfully",
    note
})
console.log(note)
})  
module.exports=app;
