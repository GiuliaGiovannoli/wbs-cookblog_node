const express = require('express');
const app = express();
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './public/uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-'+Date.now() + path.extname(file.originalname))
    }
})

const limits = { fileSize: 1000000 }

const fileFilter = (req, file, cb) => {
    // Accept image file types only
    console.log(file)
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage, fileFilter, limits })

module.exports = upload