import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Tooltip } from "antd";
import "./SettingsButton.module.scss";

const SettingsButton = () => (
  <Tooltip title="Settings">
    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 focus:outline-none">
      <FaEllipsisV />
    </button>
  </Tooltip>
);

export default SettingsButton;
