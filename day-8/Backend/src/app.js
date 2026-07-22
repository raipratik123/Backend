const express=require('express')
const app=express()
app.use(express.json());
const noteModel=require('./model/notemodel')
const cors=require('cors');
const path=require('path')

app.use(cors())
app.use(express.static("./public"))//integeration
app.post('/notes',async (req,res)=>{
    const {title,description}=req.body
    const note=await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"Notes created sucessfully",
        note
    })
})
app.get('/notes',async(req,res)=>{
    const note=await noteModel.find()
    res.status(200).json({
        message:"Notes fetched sucessfully",
        note
    })
    // console.log(note)
})
app.delete('/notes/:id',async(req,res)=>{
  const id=req.params.id
  await noteModel.findByIdAndDelete(id)
  res.status(200).json(
    {
        mesaage:'Notes deleted sucessfully'
    }
  )
})
app.patch('/notes/:id', async(req,res)=>{
    const id=req.params.id;
   const {description}=req.body
   await noteModel.findByIdAndUpdate(id,{description})
    
    res.status(201).json(
        {
            message:'Update sucessfully',
        }
    )
})

module.exports=app