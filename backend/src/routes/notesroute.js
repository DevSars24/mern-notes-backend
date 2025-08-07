import express from "express";
import {
  getallnotes,
  createnote,
  updatenote,
  deletenote,
} from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getallnotes);
router.post("/", createnote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);

export default router;
