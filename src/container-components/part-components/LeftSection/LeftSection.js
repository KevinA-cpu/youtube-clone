import React from "react";
import MenuButton from "../../../components/MenuButton/MenuButton";
import YoutubeLogo from "../../../components/YoutubeLogo/YoutubeLogo";
import "./LeftSection.module.scss";

const LeftSection = () => (
  <div>
    <div data-testid="LeftSection" className="flex items-center">
      <MenuButton />
      <YoutubeLogo />
    </div>
  </div>
);

export default LeftSection;
