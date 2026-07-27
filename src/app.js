import express, { urlencoded } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"; 
import morgan from "morgan";
import authMiddleware from "./middleware/auth.middleware.js";

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth" , authRouter)

export default app;