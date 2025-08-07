import mongoose from "mongoose";

// 1 -> create a schema 
const noteschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// 2 -> model based on that schema
const Note = mongoose.model("Note", noteschema);

export default Note;
