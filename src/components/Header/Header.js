import React from "react";
import "./Header.module.scss";
import MenuButton from "../MenuButton/MenuButton";
import YoutubeLogo from "../YoutubeLogo/YoutubeLogo";

const Header = () => (
  <div data-testid="Header">
    <div className="flex items-center">
      <MenuButton />
      <YoutubeLogo />
    </div>
  </div>
);

export default Header;
