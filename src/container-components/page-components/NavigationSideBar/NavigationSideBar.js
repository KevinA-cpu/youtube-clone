import React, { useState } from "react";
import HomePageSideBarButton from "../../../components/HomePageSideBarButton/HomePageSideBarButton";
import ShortsSideBarButton from "../../../components/ShortsSideBarButton/ShortsSideBarButton";
import SubscriptionsSideBarButton from "../../../components/SubscriptionsSideBarButton/SubscriptionsSideBarButton";
import LibrarySideBarButton from "../../../components/LibrarySideBarButton/LibrarySideBarButton";
import HistorySideBarButton from "../../../components/HistorySideBarButton/HistorySideBarButton";
import "./NavigationSideBar.module.scss";

const NavigationSideBar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div data-testid="NavigationSideBar" className="flex-col w-14 ml-1 mt-4">
      <HomePageSideBarButton
        isActive={isActive === "HomePage"}
        setIsActive={setIsActive}
      />
      <ShortsSideBarButton
        isActive={isActive === "Shorts"}
        setIsActive={setIsActive}
      />
      <SubscriptionsSideBarButton
        isActive={isActive === "Subscriptions"}
        setIsActive={setIsActive}
      />
      <LibrarySideBarButton
        isActive={isActive === "Library"}
        setIsActive={setIsActive}
      />
      <HistorySideBarButton
        isActive={isActive === "History"}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default NavigationSideBar;
