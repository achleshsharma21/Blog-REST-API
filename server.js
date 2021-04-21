const express=require("express")
const cors = require('cors')
const app=express()
const mongoose=require("mongoose")
const url= 'mongodb://localhost/BlogDBex'
const blogRouter=require('./routers/blogs')
const PORT=4000

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true })
const con=mongoose.connection

con.on('open', () => {
    console.log('çonnected....')
})
app.use(express.json())
app.use(cors())
app.use('/blogs',blogRouter)

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})