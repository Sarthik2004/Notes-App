import React from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = ({ totalnotes, onLogout }) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-violet-600 w-full h-16 px-4 sm:px-8 md:px-12 flex items-center shadow-md shadow-violet-900/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-white/15 p-2 rounded-xl border border-white/20 backdrop-blur-md">
            <FaRegStickyNote className="text-white text-lg sm:text-xl" />
          </div>

          <div>
            <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide leading-none">
              Note App
            </h1>

            <p className="text-[10px] sm:text-xs text-violet-100 tracking-widest uppercase mt-1">
              Organize your thoughts
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Total Notes */}
          <div className="bg-white/10 border border-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-xl">
            <p className="text-white text-xs sm:text-sm md:text-base font-medium">
              Total Notes
              <span className="ml-2 bg-white text-violet-600 px-2 py-0.5 rounded-md font-bold">
                {totalnotes}
              </span>
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={Logout}
            className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium 
            hover:bg-white hover:text-violet-600 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-violet-600 h-14 w-full flex justify-between items-center pl-4 sm:pl-10 pr-4 sm:pr-20'>

      <h1 className='font-bold text-white text-xl sm:text-2xl leading-8 tracking-wider font-sans'>
        📒Note App
      </h1>

      <input
        type="search"
        placeholder="Search here..."
        className='bg-white font-bold text-black h-8 w-36 sm:w-52 md:w-60 rounded border px-3 sm:px-5 outline-none'
      />

    </div>
  )
}

export default Navbar*/
