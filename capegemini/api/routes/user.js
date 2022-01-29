import express from "express"
import {signin,signup,adminsignin,adminsignup} from '../controllers/controluser.js'
const router = express.Router()

router.post("/user/signup",signup)
router.post('/user/signin',signin)
router.post('/admin/signin',adminsignin)
router.post('/admin/signup',adminsignup)


export default router