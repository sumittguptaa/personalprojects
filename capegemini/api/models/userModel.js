import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    id:{
        type: String
    },
    role:{
        type: String,
        default : "user" 
    },
    marks:{
        type: Array
    },
    attendance:{
        type: Array
    }
})

const User =  mongoose.model("User",userSchema)
export default User;