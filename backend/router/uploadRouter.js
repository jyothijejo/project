const multer = require('multer');
const express = require('express');
const { isAuth } = require('../utils');
const path = require('path');
const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads/'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}.jpg`);
    },
  });
  
  const upload = multer({ storage });
  
  uploadRouter.post('/', isAuth, upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
  });
  
  module.exports=  uploadRouter;