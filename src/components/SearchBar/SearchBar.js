import React, { useState } from "react";
import { FaSearch, FaKeyboard, FaTimes } from "react-icons/fa";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [extended, setExtended] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the query, such as perform a search
    console.log(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center">
          {extended && (
            <div
              className={`border border-blue-300 rounded-l-full border-r-transparent w-10 h-8-5 flex items-center pl-4 ${styles.h8_5}`}
            >
              <FaSearch />
            </div>
          )}
          <div className="relative flex-grow">
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
          <button
            className="absolute inset-y-0 right-10 flex items-center pr-3"
            onClick={() => setShowKeyboard(!showKeyboard)}
          >
            <FaKeyboard className="text-gray-400 hover:text-black" />
          </button>
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
      {showKeyboard && (
        <div className="border border-gray-200 absolute bottom-0 right-0 ">
          <button
            className="absolute -top-7 right-0 mt-2 mr-2 text-gray-500 hover:text-black"
            onClick={() => setShowKeyboard(false)}
          >
            <FaTimes />
          </button>
          <Keyboard
            onChange={(input) => setQuery(input)}
            layoutName="default"
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
