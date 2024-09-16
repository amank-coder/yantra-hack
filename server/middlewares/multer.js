require('dotenv').config(); // This must be called before requiring AWS SDK
const multer = require("multer");
const { S3Client } = require('@aws-sdk/client-s3')
const multerS3 = require('multer-s3')
const path = require('path')

const s3 = new S3Client({
  credentials: {
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    accessKeyId: process.env.S3_ACCESS_KEY
  },
  region: process.env.S3_REGION
})

const storage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: function (req, file, cb) {
    cb(null, {fieldName: file.fieldname});
  },
  key: function (req, file, cb) {
    cb(null, Date.now().toString())
  }
})
  

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|mp4|mov|png/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);
  

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images only (jpeg, jpg, png, gif, mp4, mov, png)!');
  }
}
  
  const uploadFiles = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single('file');  
  
  module.exports = { uploadFiles }
