import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
    password : String,
    image : String
})
const User = mongoose.model("User",userSchema)

export default User


