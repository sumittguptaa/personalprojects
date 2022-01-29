import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from './routes/user.js'
import logRoutes from './routes/log.js'
const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/',userRoutes)
app.use('/data',logRoutes)

app.get('*',(req,res)=>{
   
    res.send("You have accessed a wrong route")

})
mongoose.connect("mongodb+srv://readwrite:9335497598@cluster0.bo7ae.mongodb.net/myThirdDatabase?retryWrites=true&w=majority",{useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
        console.log("Database connected successfully")
})
.catch((err)=>{
    console.log(err)
})


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})