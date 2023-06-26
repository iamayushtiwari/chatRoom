const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_Controller')
const JwtAuth = require('../config/JWTAuth')

router.get('/signin',JwtAuth.authenticate,userController.signin)
router.get('/signup',JwtAuth.authenticate,userController.signup)
router.post('/create_user',userController.createUser)
router.post('/createSession',userController.createSession)
module.exports = router