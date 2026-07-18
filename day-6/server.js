const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])

const app = require('./src/app')
const mongoose = require('mongoose')

function connectToDb() {
mongoose.connect("mongodb+srv://ankur:wEYGMMAUDRoEikVQ@cluster0.bejvniz.mongodb.net/day-6")
.then(()=>{
    console.log('Connected to Database')
})
}
connectToDb()
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
