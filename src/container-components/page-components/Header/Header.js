import React from "react";
import "./Header.module.scss";
import LeftSection from "../../part-components/LeftSection/LeftSection";
import MiddleSection from "../../part-components/MiddleSection/MiddleSection";
import RightSection from "../../part-components/RightSection/RightSection";

const Header = () => (
  <div data-testid="Header">
    <div className="flex align-middle justify-between mt-1.5 ml-4 mr-6">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  </div>
);

export default Header;
