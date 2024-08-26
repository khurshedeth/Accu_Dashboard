import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Search({ onSearch }) {
  return (
    <nav
      className="z-[1000] flex my-6 mx-4 max-sm:mx-2 max-md:mx-3 max-lg:mx-6 px-4 py-2 justify-between items-center sticky top-[24px]"
    >
      <div className="w-full sm:w-72 md:w-80 lg:w-96 border-2 p-2 rounded-md flex items-center">
        <IoIosSearch size={20} className="text-slate-400" />
        <input
          className="outline-none w-full"
          placeholder="Search your widgets"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="ml-4">
        <FaUserCircle size={25} />
      </div>
    </nav>
  );
}

export default Search;

