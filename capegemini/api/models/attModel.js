import mongoose from "mongoose"

const attSchema = mongoose.Schema({
    present:{
        type: Number,
        default: 0
    },
    absent:{
        type: Number,
        default: 0
    }

})
const Attendance = mongoose.model("Attendance",attSchema)
export default Attendance