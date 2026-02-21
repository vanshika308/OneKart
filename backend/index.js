import express from "express";
import dotenv from 'dotenv';
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDb();
});
