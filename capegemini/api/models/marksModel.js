import mongoose from "mongoose"

const marksSchema = mongoose.Schema({
    marks:{
        type: Number,
        default: "N/A"
    },
    subject:{
        type: String,
        default: "N/A"
    }

})
const Marks = mongoose.model("Marks",marksSchema)
export default Marks