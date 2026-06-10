import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NotesCard from "../components/NotesCard";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const [note, setnote] = useState({ title: "", description: "" });
  const [listnote, setlistnote] = useState([]);
  const [editId, setEditId] = useState(null);

  const API = "https://notes-app-f40r.onrender.com/api/notes";

  // TOKEN
  const token = localStorage.getItem("token");

  // EDIT CLICK
  const handleEdit = (note) => {
    setnote({
      title: note.title,
      description: note.description,
    });

    setEditId(note._id);
  };

  // GET NOTES
  const fetchNotes = async () => {
    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setlistnote(res.data);
    } catch (error) {
      console.log("fetching error", error.message);
    }
  };

  // DELETE NOTE
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Note deleted successfully");
      fetchNotes();
    } catch (error) {
      console.log("delete note error", error.message);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setnote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, note, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Note updated successfully");
        setEditId(null);
      } else {
        await axios.post(API, note, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Note added successfully");
      }

      setnote({
        title: "",
        description: "",
      });

      fetchNotes();
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <Navbar totalnotes={listnote.length} />

      {/* MAIN CONTAINER */}
      <div className="bg-gray-100 min-h-[calc(100vh-80px)] w-full px-4 sm:px-6 lg:px-10 py-6">
        {/* FLEX SECTION */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* FORM SECTION */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-[390px] bg-white rounded-3xl border border-gray-200 shadow-xl shadow-violet-900/10 px-6 sm:px-8 py-7"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-violet-100 p-2 rounded-xl">
                  <FaPlus className="text-violet-600 text-sm" />
                </div>

                <h1 className="font-bold text-xl sm:text-2xl text-violet-600 tracking-wide">
                  {editId ? "Update Note" : "Create Note"}
                </h1>
              </div>

              <p className="text-black text-sm leading-6 mb-6 font-medium">
                Quickly save your thoughts and ideas.
              </p>

              {/* TITLE */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-black mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  placeholder="Enter title..."
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={note.description}
                  onChange={handleChange}
                  placeholder="Write your note..."
                  className="w-full min-h-[140px] p-5 rounded-2xl border border-gray-300 resize-none outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 mt-6 transition"
              >
                <FaPlus />
                {editId ? "Update Note" : "Add Note"}
              </button>
            </div>
          </form>

          {/* NOTES SECTION */}
          <div className="flex-1">
            <h1 className="font-bold text-black mb-5 text-xl sm:text-2xl">
              Your Notes
            </h1>

            {listnote.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">
                  No Notes Found
                </h2>
                <p className="text-gray-500 mt-2">
                  Create your first note to get started.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                {listnote.map((note) => (
                  <NotesCard
                    key={note._id}
                    title={note.title}
                    description={note.description}
                    id={note._id}
                    createdAt={note.createdAt}
                    onEdit={() => handleEdit(note)}
                    onDelete={() => deleteNote(note._id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;