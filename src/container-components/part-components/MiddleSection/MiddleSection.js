import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import MicrophoneButton from "../../../components/MicrophoneButton/MicrophoneButton";
import "./MiddleSection.module.scss";

const MiddleSection = () => (
  <div data-testid="MiddleSection" className="flex align-middle">
    <SearchBar />
    <MicrophoneButton />
  </div>
);

export default MiddleSection;
