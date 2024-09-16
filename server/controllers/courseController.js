const Course = require('../models/courseModel')
const User = require('../models/userModel')
const Lecture = require('../models/lectureodel')

exports.getAllCourses = async (req, res) => {
    const courses = await Course.find();
    res.json({
      courses,
    });
  }
  
exports.getSingleCourse = async (req, res) => {
    const course = await Course.findById(req.params.id);
  
    res.json({
      course,
    });
}

exports.fetchLectures = async (req, res) => {
    const lectures = await Lecture.find({ course: req.params.id });
  
    const user = await User.findById(req.user._id);
  
    if (user.role === "admin") {
      return res.json({ lectures });
    }
  
    if (!user.subscription.includes(req.params.id))
      return res.status(400).json({
        message: "You have not subscribed to this course",
      });
  
    res.json({ lectures });
  }
  
  exports.fetchLecture = async (req, res) => {
    const lecture = await Lecture.findById(req.params.id);
  
    const user = await User.findById(req.user._id);
  
    if (user.role === "admin") {
      return res.json({ lecture });
    }
  
    if (!user.subscription.includes(lecture.course))
      return res.status(400).json({
        message: "You have not subscribed to this course",
      });
  
    res.json({ lecture });
  }
  
  exports.getMyCourses = async (req, res) => {
    const courses = await Course.find({_id:req.user.subscription});
  
    res.json({ courses });
  }

  exports.payment = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);
        const course = await Course.findById(req.params.id);
        user.subscription.push(course._id);
        await user.save();
         
        res.status(200).json({
           "message":"Course purchased successfully!"
        });
    }catch(error){
        res.status(400).json({
            "message":"Payment failed!"
         });
    }
}