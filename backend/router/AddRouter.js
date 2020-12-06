const express = require('express');
const multer = require('multer');
// const data = require('../data.js');
const Upload  = require('../models/UploadModel.js')
const path = require('path')
const expressAsyncHandler = require('express-async-handler')
const { isAuth} =  require('../utils')

const AddRouter = express.Router();

const storage = multer.diskStorage({
    destination :function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({ storage })

AddRouter.post('/add/product',isAuth, upload.array('photo'),expressAsyncHandler(async (req, res)=>{
    const {_userId,title,category,price,condition,description,phone,province,city} = req.body;

    let photo =[];
    if(req.files.length>0){
        photo = req.files.map(file=>{
            return {img :file.filename }
        })
    }


    const uploads = new Upload({
        _userId: req.user._id,
        title:req.body.title,
        category:req.body.category,
        price:req.body.price,
        condition:req.body.condition,
        description:req.body.description,
        phone:req.body.phone,
        photo:req.body.photo,
        province:req.body.province,
        city:req.body.city
    })
    const createdupload = await uploads.save();
    res.send({
        title: createdupload.title,
        category:createdupload.category,
        price: createdupload.price,
        condition:createdupload.condition,
        description: createdupload.description,
        phone: createdupload.phone,
        province: createdupload.province,
        city: createdupload.city,
    })
}))

module.exports = AddRouter