import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 15000,
});

export async function tagNote(note) {
  const res = await api.post("/tag-note", {
    note,
  });

  return res.data;
}
