import express  from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
app.use(cors())
import User from './user.js'
const PORT = process.env.PORT || 5000
app.post('/user',  (req,res)=>{
    // const {name,email,mobile,password,image} = req.body
    console.log(req.body)
    // try {
    //     const result = await User.create({ name: name, email: email, mobile: mobile, password: password, image: image })
    //     res.status(200).json(result)
    // } catch (error) {   
    //     res.status(404).json(error)
    // }
})
app.get('/',(req,res)=>{
    res.send("asdjf")
})


mongoose.connect('mongodb+srv://readwrite:9335497598@cluster0.bo7ae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true,useFindAndModify: false,useUnifiedTopology: true})
.then(
    app.listen(PORT, () => {
        console.log(`App is listening on Port ${PORT}`)
    })
)
.catch((err)=>{
    console.log(err)
})


