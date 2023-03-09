import React, { useState } from "react";
import { FaSearch, FaKeyboard, FaTimes } from "react-icons/fa";
import Keyboard from "react-simple-keyboard";
import Draggable from "react-draggable";
import { Tooltip } from "antd";
import "react-simple-keyboard/build/css/index.css";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [extended, setExtended] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardHovered, setKeyboardHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the query, such as perform a search
    console.log(query);
  };

  return (
    <div className="flex align-middle">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center">
          {extended ? (
            <div
              className={`border border-blue-300 rounded-l-full border-r-transparent w-10 h-8-5 flex items-center pl-4 ${styles.h8_5}`}
            >
              <FaSearch />
            </div>
          ) : (
            <div className="w-10 h-[34.2px] pl-4"></div>
          )}
          <input
            type="text"
            placeholder="Search"
            className={`border bg-white text-gray-800 rounded-full pl-3 pr-4 py-1 focus:outline-none focus:bg-white focus:text-gray-900
          ${
            extended
              ? "border-l-transparent rounded-l-none border-blue-300"
              : "border-slate-300"
          } w-[475px]`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setExtended(true)}
            onBlur={() => setExtended(false)}
          />
          <button
            className="absolute inset-y-0 right-10 flex items-center pr-3 opacity-0 hover:opacity-100 focus:opacity-100"
            onClick={() => setShowKeyboard(!showKeyboard)}
            onMouseEnter={() => setKeyboardHovered(true)}
            onMouseDown={() => setExtended(false)}
            onMouseUp={() => setExtended(true)}
            onBlur={() => setExtended(false)}
            style={{ opacity: keyboardHovered ? 1 : 0 }}
          >
            <FaKeyboard className="text-gray-400 hover:text-black" />
          </button>
        </div>
        <Tooltip title="Search">
          <div
            className={`cursor-pointer border hover:bg-slate-200 rounded-r-full absolute inset-y-0 right-0 flex items-center pr-3 w-12 bg-slate-100 
      ${extended ? "border-l-blue-300" : "border-slate-300"}`}
          >
            <button type="submit" className="ml-4">
              <FaSearch />
            </button>
          </div>
        </Tooltip>
      </form>
      {showKeyboard && (
        <Draggable>
          <div
            className={`${styles.KeyboardBox} absolute bottom-0 right-0 cursor-move`}
          >
            <button
              className="absolute -top-1 right-0 mt-2 mr-2 text-gray-500 hover:text-black"
              onClick={() => setShowKeyboard(false)}
            >
              <FaTimes />
            </button>
            <Keyboard
              onChange={(input) => setQuery(input)}
              layoutName="default"
            />
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default SearchBar;
