import React from "react";
import "./MenuButton.module.scss";

function MenuButton() {
  return (
    <button
      className="mr-4 rounded-full flex flex-col justify-center items-center  
       hover:bg-gray-200 active:bg-gray-300 active:border active:border-gray-300"
      style={{ height: "2.0rem", width: "2.0rem", transition: "border 0.3s" }}
    >
      <div className="w-3.5 border border-gray-600 my-1  "></div>
      <div className="w-3.5 border border-gray-600   "></div>
      <div className="w-3.5 border border-gray-600 my-1 "></div>
    </button>
  );
}

export default MenuButton;
