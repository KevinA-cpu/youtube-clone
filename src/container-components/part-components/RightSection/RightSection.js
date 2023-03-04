import React from "react";
import SettingsButton from "../../../components/SettingsButton/SettingsButton";
import SignInButton from "../../../components/SignInButton/SignInButton";
import "./RightSection.module.scss";

const RightSection = () => (
  <div data-testid="RightSection" className="flex align-middle">
    <SettingsButton />
    <SignInButton />
  </div>
);

export default RightSection;
