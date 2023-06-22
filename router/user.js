const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_Controller')
const passport  = require('passport');
require('../config/passport-jwt-strategy')

router.get('/signin',userController.signin)
router.get('/signup',userController.signup)
router.post('/create_user',userController.createUser)
router.post('/createSession',userController.createSession)
// passport.authenticate('jwt',{session:false})
router.get('/test',passport.authenticate('jwt',{session:false}),userController.test)
module.exports = router