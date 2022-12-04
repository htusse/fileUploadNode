const express = require('express');
const multer = require('multer');

// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploadedFiles/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage })

// create app 
port = 3000;
const app = express();
app.listen(port,()=>{
    console.log("Server started on port :"+port)
});

// to use this API the user need to upload a single file using field name "filetoupload" when sending the POST request 
//and must send a JSON with "description" filed
app.post('/uploadfile', upload.single('filetoupload'), function (req, res, next) {  
    console.log(req.body.description);  
    res.status(200).send({'message' : "file uploaded"});
  })