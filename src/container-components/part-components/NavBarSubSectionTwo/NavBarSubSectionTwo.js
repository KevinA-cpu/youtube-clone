import React from "react";
import LibrarySideBarButton from "../../../components/LibrarySideBarButton/LibrarySideBarButton";
import HistorySideBarButton from "../../../components/HistorySideBarButton/HistorySideBarButton";
import "./NavBarSubSectionTwo.module.scss";

const NavBarSubSectionTwo = (props) => (
  <div
    data-testid="NavBarSubSectionTwo"
    className={`${props.isOpen ? "border-b-[1px] py-2" : ""}`}
  >
    <LibrarySideBarButton
      isActive={props.isActive === "Library"}
      isOpen={props.isOpen}
      setIsActive={props.setIsActive}
    />
    <HistorySideBarButton
      isActive={props.isActive === "History"}
      isOpen={props.isOpen}
      setIsActive={props.setIsActive}
    />
  </div>
);

export default NavBarSubSectionTwo;
