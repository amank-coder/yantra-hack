const { Schema, mongoose } = require('mongoose');

const courseSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    createdBy: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    reviews: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
