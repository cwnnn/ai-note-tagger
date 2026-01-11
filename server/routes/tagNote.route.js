import express from "express";
import { tagNote } from "../services/tagNote.service.js";

const router = express.Router();

router.post("/tag-note", async (req, res) => {
  const { note } = req.body;

  if (!note || typeof note !== "string") {
    return res.status(400).json({
      success: false,
      error: "note is required and must be a string",
    });
  }

  try {
    const tags = await tagNote(note);

    res.json({
      success: true,
      data: {
        tags,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
