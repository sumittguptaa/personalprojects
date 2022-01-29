import User from '../models/userModel.js'
import Admin from "../models/adminModel.js"
import jwt from "jsonwebtoken"
export const signin = async (req,res) =>{
    const { email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if(!existingUser) return res.status(400).json({message: "User doest not exist.Please create account"})
        const isPasswordCorrect = existingUser.password === password
        if(!isPasswordCorrect) return res.status(400).json({ message : "Wrong Password"})
        const result = existingUser
        const token = jwt.sign({ email: email, id: existingUser._id, role: result.role},"test",{expiresIn: "1hr"})
        res.status(200).json({result,token})
    } catch (error) {
        res.status(404).json(error)
    }


}

export const signup = async (req,res)=>{
    const { name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(404).json({ message: "User already exist .Please try with another email" })
        const result = await User.create({ name: name, email: email, password: password})
        const token = jwt.sign({ email: email, id: result._id, role: result.role }, "test", { expiresIn: "1h" })
        res.status(200).json({ result, token })
    } catch (error) {
        res.status(404).json(error)
    }

}
export const adminsignup = async (req, res) => {
    const { name, email, password} = req.body;
    try {
      
        const existingUser = await Admin.findOne({ email })
        if (existingUser) return res.status(404).json({ message: "User already exist .Please try with another email" })
        const result = await Admin.create({ name: name, email: email, password: password})
        const token = jwt.sign({ email: result.email, id: result._id,role: result.role }, "test", { expiresIn: "1h" })
        res.status(200).json({ result, token})
    } catch (error) {
        res.status(404).json(error)
    }

}
export const adminsignin = async (req, res) => {
    const { email, password } = req.body;
    try {
      
        const existingUser = await Admin.findOne({ email })
        if (!existingUser) return res.status(400).json({ message: "User doest not exist.Please create account" })
        const isPasswordCorrect = existingUser.password === password
        if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong Password" })
        const result = existingUser
        const token = jwt.sign({ email: email, id: existingUser._id ,role: result.role}, "test", { expiresIn: "1hr" })
        res.status(200).json({ result, token})
    } catch (error) {
        res.status(404).json(error)
    }

}