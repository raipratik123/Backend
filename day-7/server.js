    require("dotenv").config()
    const app=require('./src/app');
    const mongoose=require('mongoose');
    const dns=require('dns')
    dns.setServers(['8.8.8.8','8.8.4.4'])
    const connectDB=require('./src/config/database')
    connectDB()
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })