const JWT = require("jsonwebtoken");
const createError = require("../utils/createError");

const userAuth = async(req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        next(createError(401,"Unauthorized! No auth header"));
    }
    const token = authHeader?.split(" ")[1];
    try{
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        req.body.user = { userId: payload.userId };
        next();
    }catch(err){
        next(createError(401,"Auth failed"));
    }
}

module.exports = { userAuth };