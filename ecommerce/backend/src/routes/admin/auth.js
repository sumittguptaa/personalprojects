const express = require('express');
const { signup, signin } = require('../../controllers/admin/auth');
const { validateSignupRequests, isRequestValidated, validateSigninRequests } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signin',validateSigninRequests,isRequestValidated,signin)
router.post('/admin/signup', validateSignupRequests, isRequestValidated,signup)


module.exports = router;