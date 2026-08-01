import mongoose, { mongo } from "mongoose";

const notesSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    pdfUrl:{
        type:String,
        required:true
    },
    pdfPublicId: {
        type: String,
        required: true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    downloads:{
        type:Number,
        default:0
    }

},{timestamps:true})

const Note = mongoose.model("Note" , notesSchema)

export default Note;