const express=require("express")
const app=express()//server instance create karna 
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.get('/about',(req,res)=>{
    res.send("This is a about page")
})
app.get('/about/:id',(req,res)=>{
    res.send("Hello jii")
})
app.listen(3000)//server start karna  