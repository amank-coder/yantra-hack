const express = require("express")
const adminController = require('../controllers/adminController')
const {isAuth, isAdmin } = require('../middlewares/isAuth')
const { uploadFiles } = require('../middlewares/multer')
const router = express.Router()

router.post('/v1/course/new', isAuth, isAdmin, adminController.createCourse)
router.post('/v1/course/:id', isAuth, isAdmin, adminController.addLectures)
router.post('/v1/upload', isAuth, isAdmin, uploadFiles, adminController.fileUpload)
router.delete('/v1/lecture/:id',isAuth,isAdmin,adminController.deleteLecture)
router.delete('/v1/course/:id',isAuth,isAdmin,adminController.deleteCourse)
router.get('/v1/stats',isAuth,isAdmin,adminController.getAllStats)

module.exports= router