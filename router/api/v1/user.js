const express = require('express');
const router = express.Router();
const userApi = require('../../../controllers/api/v1/user_API_Controller')

router.post('/signin',userApi.createSession)
// router.post('/signup',userApi.createUser)
module.exports = router

