import Note from "../models/Notes.js";

// GET all notes
export async function getallnotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getallnotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ CREATE a new note
export async function createnote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }

    const newNote = new Note({
      title,
      content
    });

    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in createnote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE a note
export function updatenote(req, res) {
  res.status(200).send("Note updated");
}

// DELETE a note
export function deletenote(req, res) {
  res.status(200).send("Note deleted");
}
