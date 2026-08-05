import express, { urlencoded } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"; 
import noteRouter from "./routes/note.routes.js"
import morgan from "morgan";
import authMiddleware from "./middleware/auth.middleware.js";

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "EduShare Backend is Live 🚀"
    });
});

app.use("/api/auth" , authRouter)

app.use("/note" , noteRouter)

export default app;