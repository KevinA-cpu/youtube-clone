import React, { useState } from "react";
import "./MenuButton.module.scss";

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className="rounded-full flex flex-col justify-center items-center  
       hover:bg-gray-300 active:bg-gray-400 active:border active:border-gray-400"
      onClick={toggleMenu}
      style={{ height: "2.0rem", width: "2.0rem", transition: "border 0.3s" }}
    >
      <div className="w-3.5 border border-gray-600 my-1  "></div>
      <div className="w-3.5 border border-gray-600   "></div>
      <div className="w-3.5 border border-gray-600 my-1 "></div>
    </button>
  );
}

export default MenuButton;
