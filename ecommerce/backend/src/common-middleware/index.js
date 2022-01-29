const jwt = require("jsonwebtoken")
exports.requireSignin = (req, res, next) => {
    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1]
    const user = jwt.verify(token, "MONGODB")
    req.user = user
    }
    else{
        return res.status(404).json({ message: "Authentication required" })
    }
   next()
}
exports.adminMiddleware = (req,res,next)=>{

    if(req.user.role !== 'admin')
    return res.status(404).json({message : "Access Denied"})
    next()
}
exports.userMiddleware = (req,res,next)=>{
    if (req.user.role !== 'admin')
        return res.status(404).json({ message: "User Access Denied" })
    next()
}