const express = require("express");
const router = express.Router();
const chooseRoomController = require('../controllers/chatRoom_Controller')
const JwtAuth = require('../config/JWTAuth')


router.get('/chooseroom',JwtAuth.auth,chooseRoomController.chooseChatRoom)
router.post('/home',JwtAuth.auth,chooseRoomController.redirectTOHome)
// failureRedirect: '/', failureMessage: true ,

module.exports = router