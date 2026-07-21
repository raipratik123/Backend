    require('dotenv').config()
    const dns=require('dns');
    dns.setServers(['8.8.8.8','8.8.4.4']);
    const app=require('./src/app')

        const connectToDb=require('./src/config/database')
        connectToDb()
            app.listen(3000,()=>{
                console.log('Server is runing on port 3000')
            })