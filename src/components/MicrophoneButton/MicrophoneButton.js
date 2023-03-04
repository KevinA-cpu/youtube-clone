import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { Tooltip } from "antd";
import "./MicrophoneButton.module.scss";

const MicrophoneButton = () => (
  <Tooltip title="Search with your voice">
    <button
      type="button"
      className="ml-4 rounded-full flex flex-col justify-center items-center  
        hover:bg-gray-200 active:bg-gray-300 active:border active:border-gray-300"
      style={{
        height: "2.0rem",
        width: "2.0rem",
        transition: "border 0.3s",
      }}
    >
      <FaMicrophone />
    </button>
  </Tooltip>
);

export default MicrophoneButton;
