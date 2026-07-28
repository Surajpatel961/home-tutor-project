import express from "express"
import roleMiddleware from "../middleware/role.middleware.js";
import { createNote , getAllNotes, getNote } from "../controllers/note.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-note", authMiddleware ,roleMiddleware("faculty") , createNote)

router.get("/" , getAllNotes)

router.get("/:id" , getNote)

export default router;