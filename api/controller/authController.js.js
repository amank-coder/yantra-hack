const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const createError = require('../utils/createError');
const userModel = require('../models/userModel');

exports.register = async(req,res, next)=>{
    try{
        const pass= await bcrypt.hash(req.body.password, 5);

        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser)
        {
            return res.status(200).send({
                success: false,
                message:"User already exists"
            });
        }

        const newUser= new User({
            ...req.body,
            password:pass,
        })

        await newUser.save()

        const token = newUser.createJWT();

        res.status(201).send({
            success: true,
            message:"New user created",
            user:newUser,
            token,
        })

    }catch(err){
        next(err)
    }
}
  
exports.login = async(req, res, next)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user) return next(createError(404, "User not found!"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect) return next(createError(400, "Wrong password or username!"))

        const token = user.createJWT()
        res.status(200).json({
            success:true,
            message:"Login successful",
            user,
            token,
        })
    }catch(err){
        next(err)
    }
}
