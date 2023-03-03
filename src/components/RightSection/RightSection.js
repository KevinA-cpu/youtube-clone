import React from "react";
import SettingsButton from "../SettingsButton/SettingsButton";
import SignInButton from "../SignInButton/SignInButton";
import "./RightSection.module.scss";

const RightSection = () => (
  <div data-testid="RightSection" className="flex align-middle">
    <SettingsButton />
    <SignInButton />
  </div>
);

export default RightSection;
