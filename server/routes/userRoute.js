const express = require("express")
const userController = require('../controllers/userController')
const {isAuth} = require('../middlewares/isAuth')
const router = express.Router()

router.post('/v1/register', userController.register)
router.post('/v1/verify', userController.verifyUser)
router.post('/v1/login', userController.login)
router.get('/v1/myprofile', isAuth, userController.myProfile)

module.exports= router