import { register , login } from "../controllers/auth.controllers.js";
import express from "express"
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register" , register)

router.post("/login" , login)

router.get("/profile" ,authMiddleware , (req , res) =>{
    res.json({
        message:" welocme , this is protocted route",
        user:req.user
    })
})

export default router

