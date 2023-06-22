const express = require('express');
const router = express.Router();
const passport = require('passport')
const userApi = require('../../../controllers/api/v1/user_API_Controller')

router.post('/signin',userApi.createSession)
module.exports = router

