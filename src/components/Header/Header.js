import React from "react";
import "./Header.module.scss";
import MenuButton from "../MenuButton/MenuButton";
import YoutubeLogo from "../YoutubeLogo/YoutubeLogo";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => (
  <div data-testid="Header">
    <div className="flex items-center">
      <MenuButton />
      <YoutubeLogo />
      <SearchBar />
    </div>
  </div>
);

export default Header;
