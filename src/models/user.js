import mongoose, { mongo, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin" , "Student" , "faculty"],
        required:true,
    },
    semester:{
        type:Number,
    },
    department:{
        type:String,
    },
    profileImage:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false,
    }
} , {timestamps:true})

const User = mongoose.model("User" , userSchema);

export default User