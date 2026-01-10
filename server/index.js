import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateContent } from "./openrouter.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// OpenRouter AI route
app.post("/api/ai", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "The message cannot be empty" });
    }

    const response = await generateContent(message);

    res.json({
      reply: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenRouter AI gave an error" });
  }
});
