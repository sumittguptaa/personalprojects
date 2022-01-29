const express = require("express")
const { adminMiddleware, requireSignin } = require("../common-middleware")
const { addCategory, getCategory } = require("../controllers/category")
const router = express.Router()
router.post('/category/create',requireSignin,adminMiddleware,addCategory)
router.get('/category/getcategory', getCategory)

module.exports = router