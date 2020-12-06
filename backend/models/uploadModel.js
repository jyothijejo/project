const mongoose = require('mongoose');


const UploadSchema = new mongoose.Schema(
    {
        _userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
        title:{ type: String, required: true},
        category:{type: String, required: true},
        price:{type: String, required: true},
        condition:{type: String, required: true},
        description:{type: String, required: true},
        photo:[
            {img :{type:String}}
        ],
        phone:{type: String, required: true},
        province:{type: String, required: true},
        city:{type: String, required: true}

    },
    {
      timestamps: true,
    }
  );
  const Upload = mongoose.model('Upload', UploadSchema);
  
  module.exports=  Upload;