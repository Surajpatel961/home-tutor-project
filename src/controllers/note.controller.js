import Note from "../models/note.js";

export const createNote = async (req , res) =>{

    try {

        const {title, description, subject, semester, pdfUrl} = req.body

        if (!title || !description || !subject || !semester || !pdfUrl) {

            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });

        }

        const newNote = new Note({
           
            title,
            description,
            subject,
            semester,
            pdfUrl,
            uploadedBy:req.user.id

        })

        await newNote.save()
        
        return res.status(200).json({
            success:true,
            message:"Note uploaded successfully",
            data:newNote
        })

    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getAllNotes = async (req , res) => {

    try {
        
        const allNotes = await Note.find().populate({
           
            path:"uploadedBy",
            select:"name email department role"
        })

        res.status(200).json({
            success: true,
            message:"Notes fatched Successfully",
            data:allNotes
        })

    } catch (error) {

        res.sataus(400).json({
            success:false,
            message:error.message
        })
        
    }

    
}

export const getNote = async (req , res) => {
    
    try {
        
        const reqNote = await Note.findById(req.params.id).populate("uploadedBy", "name email department role")

        res.status(200).json({
            success: true,
            message:"Note fatched Successfully",
            data:reqNote
        })

    } catch (error) {

    if (error.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid note ID"
        });
    }

    return res.status(500).json({
        success: false,
        message: error.message
    });
}
}