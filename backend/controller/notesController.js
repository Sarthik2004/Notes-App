import Note from "../models/note.js";

export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json({ message: "Notes created successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!note) {
      res.status(404).json({ message: "notes not found" });
    }
    res.status(200).json({ message: "notes update successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      res.status(404).json({ message: "notes not found " });
    }
    res.status(200).json({ message: "notes deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
