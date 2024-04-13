const Course = require('../models/courseModel');
const mongoose = require('mongoose');

exports.createCourse = async (req, res, next) => {
  try {
    const newCourse = new Course(req.body);

    await newCourse.save();
    res.send({
      message:"Course Created",
      newCourse
    });
  } catch (err) {
    next(err);
  }
};


exports.getCourses = async (req, res, next) => {
  
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (err) {
    next(err);
  }
};


exports.updateCourses = async (req, res, next) => {
    try {
      const { id } = req.params;
      const courseId = new mongoose.Types.ObjectId(id);
      const { review } = req.body;
  
      let course = await Course.findById(courseId);
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      course.reviews.push(review);
  
      await course.save();
  
      return res.json({
        message: "Review added updated successfully",
        course
      });
    } catch (error) {
      console.error("Error updating course review:", error);
      return res.status(500).json({ message: "Internal server error", error: error });
    }
  }

