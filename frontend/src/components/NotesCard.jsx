import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// import { deleteNote } from "../pages/deleteNote";

const NotesCard = (props) => {
  return (
    <div className="w-full sm:w-65 md:w-70 bg-white rounded-2xl shadow-lg shadow-black/10 border-l-4 border-l-purple-600 p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl font-inter text-purple-600 mb-3">
          {props.title}
        </h1>

        <p className="font-inter text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
          {props.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4 sm:mt-6">
        <p className="text-gray-500 text-xs sm:text-sm">
          {new Date(props.createdAt).toLocaleDateString("en-GB")}
        </p>

        <div className="flex gap-2">
          <button onClick={props.onEdit} className="h-7 w-7 sm:h-6 sm:w-6 rounded border-2 border-green-300 text-green-600 flex items-center justify-center cursor-pointer">
            <FaEdit />
          </button>

          <button
            // onClick={() => deleteNote(props.id)} 
            onClick={props.onDelete}
            className="h-7 w-7 sm:h-6 sm:w-6 rounded border-2 border-red-300 text-red-500 flex items-center justify-center cursor-pointer"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
