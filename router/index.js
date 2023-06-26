const express = require("express");
const router = express.Router();
const home_Controller = require('../controllers/home_Controller')
const aboutController = require('../controllers/about_controller')
const userController = require('../controllers/user_Controller')
const welcomeController = require('../controllers/welcome_controller')
const JwtAuth = require('../config/JWTAuth')

// console.log("router is working fine");
router.get('/',JwtAuth.auth,welcomeController.welcome)
router.get('/about',JwtAuth.auth,aboutController.about)
router.get('/logout',JwtAuth.auth,userController.logout)

router.use('/room',require('./chooseChatRoom'))
router.use('/api',require('./api'))
router.use('/users',require('./user'))
module.exports = router