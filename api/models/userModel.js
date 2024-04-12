const {Schema, mongoose} = require('mongoose')
const JWT = require('jsonwebtoken')

const userSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
});

userSchema.methods.createJWT = function(){
  return JWT.sign({userId: this._id, isAdmin: this.isAdmin},process.env.JWT_SECRET,{
    expiresIn: "1d",
  });
};

module.exports= mongoose.model("User", userSchema);