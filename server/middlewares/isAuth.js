const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const isAuth = async(req,res,next) =>{
    try{
        const token = req.headers.token;
        if(!token){
            return res.status(403).json({
                message:"Please login"
            })
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedData._id);
        next()
    }catch(error){
        res.status(500).json({
            "message":"Login first"
        })
    }
}

const isAdmin = (req, res, next) => {
    try {
      if (req.user.role !== "admin")
        return res.status(403).json({
          message: "You are not admin",
        });
  
      next();
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {isAuth, isAdmin} ;