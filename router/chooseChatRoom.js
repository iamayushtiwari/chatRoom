const express = require("express");
const router = express.Router();
const chooseRoomController = require('../controllers/chatRoom_Controller')
const JwtAuth = require('../config/JWTAuth')
const cors = require('cors')


router.get('/chooseroom',JwtAuth.auth,chooseRoomController.chooseChatRoom)
router.post('/home',JwtAuth.auth,cors({origin:'*'}),chooseRoomController.redirectTOHome)

module.exports = router