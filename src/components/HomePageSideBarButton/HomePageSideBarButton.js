import React from "react";
import { HomeOutlined, HomeFilled } from "@ant-design/icons";

const HomePageSideBarButton = (props) => {
  return (
    <div
      className="flex flex-col border border-transparent items-center align-middle py-2 px-4 bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-300 active:border active:border-gray-300 cursor-pointer rounded-md"
      style={{ transition: "border 0.3s" }}
      onClick={() => props.setIsActive("HomePage")}
    >
      {props.isActive ? (
        <HomeFilled className="mb-1" />
      ) : (
        <HomeOutlined className="mb-1" />
      )}
      <span className="font-extralight" style={{ fontSize: "10px" }}>
        Home
      </span>
    </div>
  );
};

export default HomePageSideBarButton;
