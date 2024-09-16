const Course = require('../models/courseModel')
const Lecture = require('../models/lectureodel')
const User = require('../models/userModel')

exports.createCourse = async(req, res)=>{
    try{
        const { title, description, category, createdBy, duration, price, image } = req.body;

        await Course.create({
            title,
            description,
            category,
            createdBy,
            image,
            duration,
            price,
        });

        res.status(201).json({
            message: "Course Created Successfully",
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.addLectures = async(req, res)=>{
    try{
        const course = await Course.findById(req.params.id);

        if (!course)
          return res.status(404).json({
            message: "No Course with this id",
          });
      
        const { title, description, video } = req.body;
            
        const lecture = await Lecture.create({
          title,
          description,
          video,
          course: course._id,
        });
      
        res.status(201).json({
          message: "Lecture Added",
          lecture,
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteLecture = async(req, res)=>{
    try{
        const lecture = await Lecture.findById(req.params.id);

        await lecture.deleteOne();

        res.status(201).json({
            message: "Lecture deleted Successfully",
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteCourse = async(req, res)=>{
    try{
        const course = await Course.findById(req.params.id);
        await Lecture.find({ course: req.params.id }).deleteMany();
        await course.deleteOne();
        await User.updateMany({}, { $pull: { subscription: req.params.id } });
        
        res.status(201).json({
            message: "Course deleted Successfully",
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.fileUpload = async(req, res)=>{
    try{
        
        const file = req.file;
        if(!file){
            return res.status(403).json({
                message: "Please upload a file",
              });
        }

        let data = {
            url: file.location,
            type: file.mimetype
        }
        res.status(201).json({
          message: "File uploaded successfully!",
          data
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAllStats = async(req, res)=>{
    try{
        
        const users = (await User.find()).length;
        const courses = (await Course.find()).length;
        const lectures = (await Lecture.find()).length;

        const stats = {
            users,
            courses,
            lectures
        }
        res.status(201).json({
          message: "Stats fetched successfully!",
          stats
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}