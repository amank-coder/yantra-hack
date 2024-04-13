const express = require("express")
const router = express.Router()
const { userAuth } = require('../middleware/authMiddleware');

const courseController = require('../controller/courseController')

router.post('/create', userAuth, courseController.createCourse)
router.get('/getCourses' ,userAuth, courseController.getCourses) 
router.patch('/update/:id', userAuth, courseController.updateCourses)

module.exports= router     