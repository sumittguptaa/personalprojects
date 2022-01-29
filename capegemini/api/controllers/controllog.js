import express from "express"
import mongoose from "mongoose"
import Marks from '../models/marksModel.js'
import Attendance from "../models/attModel.js"
import User from '../models/userModel.js'
export const getLog =  async (req,res)=>{

    try {
        const att = await Marks.find()
       
        const mark = await Attendance.find()
        res.status(200).json({att,mark})

    } catch (error) {
        res.status(400).json(error)
    }
} 

export const users = async(req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json({user})
    } catch (error) {
        console.log(error)
    }
}

export const marks = async(req,res)=>{
    const{marks,subject} = req.body
    const masub = new Marks({marks: marks, subject : subject})
    try {
      
        const mks = await masub.save()
        res.status(200).json({data: mks})
    } catch (error) {
        res.status(404).json(error)
    }
}
export const attendance = async(req,res)=>{
    const{present,absent} = req.body
    const att = new Attendance({present:present,absent:absent})
    
    try {
        const preabs = await att.save()
      
        res.status(200).json({data: preabs})
    } catch (error) {
        res.status(404).json(error)
    }
}