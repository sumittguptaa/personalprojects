const { check,validationResult } = require('express-validator')
exports.validateSignupRequests = [
    check('firstName')
        .notEmpty()
        .withMessage("First Name is required"),
    check('lastName')
        .notEmpty()
        .withMessage("Last Name is required"),
    check('email')
        .isEmail()
        .withMessage("Enter a valid email"),
    check('password')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 charecter long")

];
exports.validateSigninRequests = [
    check('email')
        .isEmail()
        .withMessage("Enter a valid email"),
    check('password')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 charecter long")

];
exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req)
    if(errors.array().length > 0)
    return res.status(404).json({error : errors.array()[0].msg})
    next()
}