import React from "react";
import "./Header.module.scss";
import MenuButton from "../MenuButton/MenuButton";
import YoutubeLogo from "../YoutubeLogo/YoutubeLogo";
import SearchBar from "../SearchBar/SearchBar";
import RightSection from "../RightSection/RightSection";

const Header = () => (
  <div data-testid="Header">
    <div className="flex items-center">
      <MenuButton />
      <YoutubeLogo />
      <SearchBar />
      <RightSection />
    </div>
  </div>
);

export default Header;
