const express = require('express');
const { signup, signin } = require('../controllers/auth');
const {check} = require('express-validator');
const { validateSignupRequests, isRequestValidated, validateSigninRequests } = require('../validators/auth');
const router = express.Router();

router.post('/signin',validateSigninRequests,isRequestValidated,signin)
router.post('/signup', validateSignupRequests,isRequestValidated,signup)


module.exports = router;