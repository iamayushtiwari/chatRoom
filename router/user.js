const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_Controller')

router.get('/signin',userController.signin)
router.get('/signup',userController.signup)
router.post('/create_user',userController.createUser)
module.exports = router