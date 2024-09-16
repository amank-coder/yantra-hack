const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
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
    unique: true
  },
  role:{
    type: String,
    default:"user"
  },
  subscription:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course"
  }]
},{
  timestamps:true
});

module.exports= mongoose.model("User", userSchema);