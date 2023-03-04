import React from "react";
import { PlusSquareOutlined, PlusSquareFilled } from "@ant-design/icons";

const SubscriptionsSideBarButton = (props) => {
  return (
    <div
      className="flex flex-col border border-transparent items-center align-middle py-2 px-4 bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-300 active:border active:border-gray-300 cursor-pointer rounded-md"
      style={{ transition: "border 0.3s" }}
      onClick={() => props.setIsActive("Subscriptions")}
    >
      {props.isActive ? (
        <PlusSquareFilled className="mb-1" />
      ) : (
        <PlusSquareOutlined className="mb-1" />
      )}
      <span className="font-extralight" style={{ fontSize: "10px" }}>
        Subscriptions
      </span>
    </div>
  );
};

export default SubscriptionsSideBarButton;
