import express from "express";
import tagNoteRoute from "./routes/tagNote.route.js";

const app = express();

app.use(express.json());
app.use("/api", tagNoteRoute);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
