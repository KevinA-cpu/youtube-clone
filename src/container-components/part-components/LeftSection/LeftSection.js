import React from "react";
import MenuButton from "../../../components/MenuButton/MenuButton";
import YoutubeLogo from "../../../components/YoutubeLogo/YoutubeLogo";
import "./LeftSection.module.scss";

const LeftSection = () => (
  <div data-testid="LeftSection" className="flex items-center">
    <MenuButton />
    <YoutubeLogo />
  </div>
);

export default LeftSection;
