import express from "express"
import {marks,attendance,getLog, users} from '../controllers/controllog.js'
import auth from "../middleware/auth.js"
const router = express.Router()

router.get("/",getLog)
router.post("/attendance",auth,attendance)
router.post('/marks',auth,marks)
router.get('/users',auth,users)
export default router