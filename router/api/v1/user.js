const express = require('express');
const router = express.Router();
const userApi = require('../../../controllers/api/v1/user_API_Controller')

router.post('/sigin',userApi.createSession)
module.exports = router

