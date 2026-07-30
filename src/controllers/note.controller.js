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

export const updateNote = async (req ,res) =>{
    try {
        
        const note = await Note.findById(req.params.id)

        if (!note) {
           return res.status(404).json({
               success: false,
               message: "Note not found"
            });
        }

        if(req.user.id !== note.uploadedBy.toString()){
            return res.status(403).json({
                success:false,
                message:"you can only update your own notes"
            })
        }

        const {title, description, subject, semester, pdfUrl} = req.body

        note.title = title || note.title;
        note.description = description || note.description;
        note.subject = subject || note.subject;
        note.semester = semester || note.semester;
        note.pdfUrl = pdfUrl || note.pdfUrl;

        await note.save();

        return res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data: note
        });

    } catch (error) {

        if(error === "CasteError") {

            return res.status(400).json({
                success:false,
                message:" Invalid note id"
            })
        }
        
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const  deleteNote = async ( req , res) => {

    try {
        
        const note = await Note.findById(req.params.id)

        if (!note) {
         return res.status(404).json({
             success: false,
             message: "Note not found"
            });
        } 

        if(req.user.id !== note.uploadedBy.toString()){
            return res.status(403).json({
                success:false,
                message:"you can only delete your own notes"
            })
        }

         await note.deleteOne();

         return res.status(200).json({
              success: true,
              message: "Note deleted successfully"
         });

    } catch (error) {
        
        if(error === CasteError) {

            return res.status(400).json({
                success:false,
                message:" Invalid note id"
            })
        }
    }
}