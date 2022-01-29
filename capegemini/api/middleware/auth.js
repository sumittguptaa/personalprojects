import jwt from "jsonwebtoken"

const auth = async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    try {
        const decode = jwt.verify(token,"test") 
       const role = decode?.role 
        if(role === "admin"){
            req.userId = decode?.id
            next()
        }else{
            res.status(404).json({message: "You are not authorized"})
        }
    } catch (error) {
        console.log(error)
    }
}

export default auth