const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const env = require('dotenv')
env.config()
const PORT = 5000;
app.use(bodyParser.json())

const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes)
mongoose.connect('mongodb+srv://readwrite:9335497598@cluster0.bo7ae.mongodb.net/mySecondDatabase?retryWrites=true&w=majority',{useUnifiedTopology: true,useCreateIndex: true, useNewUrlParser: true})
.then(()=>{
app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)

})
})
.catch((err)=>{
    console.log(err.message)
})