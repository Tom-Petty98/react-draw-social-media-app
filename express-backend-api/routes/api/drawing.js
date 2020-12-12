var router = require('express').Router();
const multer = require('multer');
let fs = require('fs-extra');

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, '~/upload');
//    },
//   filename: function (req, file, cb) {
//       cb(null , file.originalname);
//   }
// });

// var upload = multer({ storage: storage })

// router.post('/upload', upload.single('upload'), (req, res) => {

//   res.send()
// })


require("dotenv").config();
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const s3 = new aws.S3({
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.SECRET,
})


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "drawing-react-app001",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        },
        acl: "public-read",
    })
})

router.post("/save-image", upload.single("image"), (req, res) => {
  res.status(201).json({path: req.file.location});
})


module.exports = router;