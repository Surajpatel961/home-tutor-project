import { raw } from "express";
import cloudinary from "../config/cloudinary.js";

const deleteFromCloudinary = async (publicId) => {
      
    if(!publicId) {
        throw new Error("Public Id Is Required");
        
    }

    const result = await cloudinary.uploader.destroy(publicId , {
        resource_type : "raw"
    })

    if(result.result !== "ok" && result.result !== "not found") {

        throw new Error("Cloudinary delete failed");

    }

    return result

}

export default deleteFromCloudinary