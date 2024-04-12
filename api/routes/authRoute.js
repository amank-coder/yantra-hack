const express = require("express")
const router = express.Router()
const authController = require('../controller/authController.js')

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports= router