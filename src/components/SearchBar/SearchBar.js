import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.module.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [extended, setExtended] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the query, such as perform a search
    console.log(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center">
        {extended && (
          <div className="border border-blue-300 rounded-l-full border-r-transparent w-10 h-8-5 flex items-center pl-4">
            <FaSearch />
          </div>
        )}
        <input
          type="text"
          placeholder="Search"
          className={`border bg-white text-gray-800 rounded-full pl-3 pr-4 py-1 w-96 focus:outline-none focus:bg-white focus:text-gray-900
          ${
            extended
              ? "border-l-transparent rounded-l-none border-blue-300"
              : "border-slate-300"
          } `}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setExtended(true)}
          onBlur={() => setExtended(false)}
        />
      </div>
      <div
        className={`border  rounded-r-full absolute inset-y-0 right-0 flex items-center pr-3 w-13 bg-slate-100 
      ${extended ? "border-l-blue-300" : "border-slate-300"}`}
      >
        <div className="w-px h-full"></div>
        <button type="submit" className="ml-3.5">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
