import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import notesRoute from "./routes/notesroute.js";
import { connectdb } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🛠️ Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // For parsing JSON requests

// 🚏 Routes
app.use("/api/notes", notesRoute);

// 📦 Connect to MongoDB and start the server
connectdb()
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
