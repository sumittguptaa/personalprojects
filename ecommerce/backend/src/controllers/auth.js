const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
exports.signup = (req,res) =>{

    User.findOne({email : req.body.email})
    .exec((user,error)  => {
      if(user) return res.status(400).json({
          message : "User already exists"
      })
    
      const{firstName,lastName,email,password} = req.body;
      const _user = new User({
          firstName, lastName,email,password , userName: Math.random().toString()
      })
      _user.save((err,data)=>{
          if(err){
              return res.status(404).json({
                  message: err
              })
          }
          else{
              return res.status(202).json({
                  message : "User created successfully"
              })
          }
      })
    })
}

exports.signin = (req,res)=>{
    User.findOne({email : req.body.email})
    .exec((err,user)=>{
        if(err) return res.status(404).json({err})
        if(user){
            if(user.authenticate(req.body.password)){
                 const token = jwt.sign({_id : user._id, role: user.role},"MONGODB", {expiresIn : "1h"})
                 const {_id,firstName,lastName, email,role,fullName} = user
                 res.status(200).json({
                     token,
                     user: {
                        _id,firstName,lastName, email,role,fullName
                     }
                 })
            }
            else{
                res.status(404).json({
                    message: "Credentials not matched"
                })
            }
        }else{
            return res.status(404).json({message: "Something went wrong"})
        }

    })
}

