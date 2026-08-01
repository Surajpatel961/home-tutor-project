import { application } from "express";
import multer from "multer"

const storage = multer.memoryStorage();

const fileFilter = (req , file , cb) => {

    if(file.mimetype === "application/pdf"){

        cb(null , true);

    }else{
        cb( errro , false)
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:10 * 1024 * 1024
    }
});

export default upload;