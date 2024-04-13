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
    videoId: {
      type: String,
    },
    reviews: [
      {
        review: {
          type: String,
        },
        userName: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);
