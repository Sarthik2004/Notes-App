// import axios from "axios";
// import fetchNotes from "./Home";

// export const deleteNote = async (id) => {
//   const API = "http://localhost:3000/api/notes";
//   try {
//     await axios.delete(`${API}/${id}`);
//     alert("note deleted successfully");
//     fetchNotes();
//   } catch (error) {
//     console.log("delete note error", error.message);
//   }
// };



// import jwt from "jsonwebtoken";
// import { User } from "../models/user.js";

// export const protect = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token" });
//     }

//     const decoded = jwt.verify(token, "secret key");

//     req.user = await User.findById(decoded.id).select("-password");

//     if (!req.user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };