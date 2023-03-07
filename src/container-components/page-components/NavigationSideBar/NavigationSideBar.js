import React, { useState } from "react";
import NavBarSubSectionOne from "../../part-components/NavBarSubSectionOne/NavBarSubSectionOne";
import NavBarSubSectionTwo from "../../part-components/NavBarSubSectionTwo/NavBarSubSectionTwo";
import { useSelector } from "react-redux";
import "./NavigationSideBar.module.scss";

const NavigationSideBar = () => {
  const [isActive, setIsActive] = useState("");
  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <div
      data-testid="NavigationSideBar"
      className={`flex-col ml-1 mt-4 ${isOpen ? "w-48" : "w-14"} w-`}
    >
      <NavBarSubSectionOne
        isActive={isActive}
        setIsActive={setIsActive}
        isOpen={isOpen}
      />
      <NavBarSubSectionTwo
        isActive={isActive}
        setIsActive={setIsActive}
        isOpen={isOpen}
      />
    </div>
  );
};

export default NavigationSideBar;
