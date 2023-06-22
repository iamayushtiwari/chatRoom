const express = require("express");
const router = express.Router();
const home_Controller = require('../controllers/home_Controller')
const aboutController = require('../controllers/about_controller')
const auth = require("../config/auth");
const passport  = require('passport');
require('../config/passport-jwt-strategy')

// console.log("router is working fine");
router.get('/',home_Controller.homePage)
router.get('/about',aboutController.about)


router.use('/api',require('./api'))
router.use('/users',require('./user'))
module.exports = router