import axios from "axios";

const notes = axios.create({
  baseURL: "http://localhost:3000/notes",
  timeout: 15000, // opsiyonel, tagNote örneğine uyumlu
});

export async function getNotes() {
  try {
    const res = await notes.get("/"); // sadece '/' yeterli
    return res.data;
  } catch (err) {
    console.error("Notlar alınamadı:", err);
    return [];
  }
}

export async function addNote(note) {
  try {
    const res = await notes.post("/", note); // note'u obje olarak gönder
    return res.data;
  } catch (err) {
    console.error("Not eklenemedi:", err);
    return null;
  }
}

export async function updateNote(id, note) {
  try {
    const res = await notes.put(`/${id}`, note); // PUT /notes/:id
    return res.data;
  } catch (err) {
    console.error("Not güncellenemedi:", err);
    return null;
  }
}

export async function trashNote(id) {
  try {
    const res = await notes.patch(`/${id}/status`, {
      status: "trashed",
    });
    return res.data;
  } catch (err) {
    console.error("Not trash'e alınamadı:", err);
    return null;
  }
}

export async function restoreNote(id) {
  try {
    const res = await notes.patch(`/${id}/status`, {
      status: "active",
    });
    return res.data;
  } catch (err) {
    console.error("Not geri alınamadı:", err);
    return null;
  }
}

export async function archiveNote(id) {
  try {
    const res = await notes.patch(`/${id}/status`, {
      status: "archived",
    });
    return res.data;
  } catch (err) {
    console.error("Not arşivlenemedi:", err);
    return null;
  }
}

export async function unarchiveNote(id) {
  try {
    const res = await notes.patch(`/${id}/status`, {
      status: "active",
    });
    return res.data;
  } catch (err) {
    console.error("Not arşivden çıkarılamadı:", err);
    return null;
  }
}

export async function permanentlyDeleteNote(id) {
  try {
    const res = await notes.delete(`/${id}`);
    return res.data;
  } catch (err) {
    console.error("Kalıcı silinemedi:", err);
    return null;
  }
}
