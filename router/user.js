const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_Controller')

router.get('/signin',userController.sigin)
router.get('/signup',userController.sigup)
module.exports = router