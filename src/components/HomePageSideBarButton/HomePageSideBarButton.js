import React from "react";
import { HomeOutlined, HomeFilled } from "@ant-design/icons";

const HomePageSideBarButton = (props) => {
  return (
    <div
      className={`
      ${
        props.isOpen ? "ml-1" : "flex-col align-middle"
      } flex items-center text-center border border-transparent 
        py-2 px-4 bg-white text-gray-800 hover:bg-gray-100
        active:bg-gray-300 active:border active:border-gray-300 cursor-pointer rounded-lg`}
      style={{ transition: "border 0.3s" }}
      onClick={() => props.setIsActive("HomePage")}
    >
      {props.isActive ? (
        <HomeFilled className={`${props.isOpen ? "" : "mb-1"}`} />
      ) : (
        <HomeOutlined className={`${props.isOpen ? "" : "mb-1"}`} />
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
        Home
      </span>
    </div>
  );
};

export default HomePageSideBarButton;
