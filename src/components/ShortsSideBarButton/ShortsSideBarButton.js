import React from "react";
import { VideoCameraOutlined, VideoCameraFilled } from "@ant-design/icons";

const ShortsSideBarButton = (props) => {
  return (
    <div
      className="flex flex-col border border-transparent items-center align-middle py-2 px-4 bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-300 active:border active:border-gray-300 cursor-pointer rounded-md"
      style={{ transition: "border 0.3s" }}
      onClick={() => props.setIsActive("Shorts")}
    >
      {props.isActive ? (
        <VideoCameraFilled className="mb-1" />
      ) : (
        <VideoCameraOutlined className="mb-1" />
      )}
      <span className="font-extralight" style={{ fontSize: "10px" }}>
        Shorts
      </span>
    </div>
  );
};

export default ShortsSideBarButton;
