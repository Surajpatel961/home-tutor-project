import express from "express"
import roleMiddleware from "../middleware/role.middleware.js";
import { createNote , deleteNote, downloadNotes, getAllNotes, getNote, updateNote } from "../controllers/note.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/create-note", authMiddleware ,roleMiddleware("faculty"), upload.single("pdf"), createNote)

router.get("/" , getAllNotes)

router.get("/:id" , authMiddleware, getNote)

router.put("/:id" ,authMiddleware, roleMiddleware("faculty") , updateNote)

router.delete("/:id" ,authMiddleware, roleMiddleware("faculty") , deleteNote)

router.patch("/:id/download" ,authMiddleware, downloadNotes)

export default router;