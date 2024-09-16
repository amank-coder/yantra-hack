const express = require("express")
const courseController = require('../controllers/courseController')
const {isAuth} = require('../middlewares/isAuth')
const router = express.Router()

router.get('/v1/course/all', courseController.getAllCourses);
router.get('/v1/course/:id', courseController.getSingleCourse);
router.get("/v1/lectures/:id", isAuth, courseController.fetchLectures);
router.get("/v1/lecture/:id", isAuth, courseController.fetchLecture);
router.get("/v1/mycourse", isAuth, courseController.getMyCourses);
router.post("/v1/payment/:id", isAuth, courseController.payment);

module.exports= router