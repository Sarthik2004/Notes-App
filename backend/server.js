import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";
import connectDB from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use("/api/notes", notesRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.port;

app.listen(port, () => {
  console.log(`port is running on : ${port}`);
});
