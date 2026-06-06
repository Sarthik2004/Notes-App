import express from "express";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controller/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);

export default router;
