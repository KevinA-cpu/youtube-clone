import React from "react";
import { FunnelPlotOutlined, FunnelPlotFilled } from "@ant-design/icons";

const LibrarySideBarButton = (props) => {
  return (
    <div
      className={`
      ${
        props.isOpen ? "ml-1" : "flex-col align-middle"
      } flex items-center text-center border border-transparent 
        py-2 px-4 bg-white text-gray-800 hover:bg-gray-100
        active:bg-gray-300 active:border active:border-gray-300 cursor-pointer rounded-lg`}
      style={{ transition: "border 0.3s" }}
      onClick={() => props.setIsActive("Library")}
    >
      {props.isActive ? (
        <FunnelPlotFilled className={`${props.isOpen ? "" : "mb-1"}`} />
      ) : (
        <FunnelPlotOutlined className={`${props.isOpen ? "" : "mb-1"}`} />
      )}
      <span
        className={`
      ${
        props.isOpen
          ? props.isActive
            ? "font-bold ml-3 text-[13px]"
            : "ml-3 text-[13px]"
          : ""
      } font-extralight text-[10px]`}
      >
        Library
      </span>
    </div>
  );
};

export default LibrarySideBarButton;
