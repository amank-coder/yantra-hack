const User = require('../models/userModel')
const Course = require('../models/courseModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { sendMail } = require('../middlewares/sendMail');

exports.register = async(req, res)=>{
    try{
        const { email, name, password } = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: "User already exists!"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        user = {
            name,
            email, 
            password: hashPassword
        }

        const otp = Math.floor(Math.random()*1000000);
        const activationToken = jwt.sign({
            user, 
            otp,
        }, process.env.ACTIVATION_TOKEN, {
            expiresIn: "5m",
        });
        const data = {
            name, 
            otp,
        };
        await sendMail(
            email,
            "Vidya Mandir",
            data
        )

        res.status(200).json({
            message: "OTP sent to your email!",
            activationToken,
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.verifyUser = async(req, res)=>{
    const {otp, activationToken} = req.body;

    const verify = jwt.verify(activationToken, process.env.ACTIVATION_TOKEN);

    if(!verify){
        return res.status(400).json({
            message: "otp expired"
        });
    }

    if(verify.otp!=otp){
        return res.status(400).json({
            message: "wrong otp"
        });
    }

    await User.create({
        name: verify.user.name,
        email: verify.user.email,
        password: verify.user.password
    })

    res.json({
        message: "User Registered"
    })
}

exports.login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message:"No user with this email"
            });
        } 

        const isCorrect = await bcrypt.compare(password, user.password)
        if(!isCorrect){
            return res.status(400).json({
                message:"wrong password"
            });
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn:"15d"
        })

        res.status(200).json({
            message:"Login successful",
            user,
            token,
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.myProfile = async(req, res)=>{
    const user = await User.findById(req.user._id);
    res.json({
        user
    })
}


