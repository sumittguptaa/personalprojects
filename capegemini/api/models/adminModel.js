import mongoose from "mongoose"

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    role: {
        type: String,
        default: "admin"
    }
})

const Admin = mongoose.model("Admin", adminSchema)
export default Admin;