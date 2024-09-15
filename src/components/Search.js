import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Search({ onSearch }) {
  return (
    <nav className="z-[1000] flex my-6 mx-4 max-sm:mx-2 max-md:mx-3 max-lg:mx-6 px-4 py-2 justify-between items-center sticky top-[24px]">
      <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white shadow-md p-2 rounded-full flex items-center">
        <IoIosSearch size={20} className="text-gray-500 ml-2" />
        <input
          className="outline-none w-full bg-transparent text-gray-700 px-2 py-1 rounded-full"
          placeholder="Search your widgets"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="ml-4 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
        <FaUserCircle size={28} className="text-gray-700" />
      </div>
    </nav>
  );
}

export default Search;
