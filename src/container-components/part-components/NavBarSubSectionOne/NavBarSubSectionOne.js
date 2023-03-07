import React from "react";
import HomePageSideBarButton from "../../../components/HomePageSideBarButton/HomePageSideBarButton";
import ShortsSideBarButton from "../../../components/ShortsSideBarButton/ShortsSideBarButton";
import SubscriptionsSideBarButton from "../../../components/SubscriptionsSideBarButton/SubscriptionsSideBarButton";
import "./NavBarSubSectionOne.module.scss";

const NavBarSubSectionOne = (props) => (
  <div
    data-testid="NavBarSubSectionOne"
    className={`${props.isOpen ? "border-b-[1px] py-2" : ""}`}
  >
    <HomePageSideBarButton
      isActive={props.isActive === "HomePage"}
      isOpen={props.isOpen}
      setIsActive={props.setIsActive}
    />
    <ShortsSideBarButton
      isActive={props.isActive === "Shorts"}
      isOpen={props.isOpen}
      setIsActive={props.setIsActive}
    />
    <SubscriptionsSideBarButton
      isActive={props.isActive === "Subscriptions"}
      isOpen={props.isOpen}
      setIsActive={props.setIsActive}
    />
  </div>
);

export default NavBarSubSectionOne;
