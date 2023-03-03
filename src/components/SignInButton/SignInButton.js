import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import "./SignInButton.module.scss";

function SignInButton() {
  return (
    <button
      className="border border-gray-200  bg-white text-blue-700 rounded-full flex items-center hover:bg-blue-50 hover:border-none"
      style={{ fontSize: "12px", padding: "6px" }}
    >
      <FaSignInAlt className="mr-2" />
      <span>Sign in</span>
    </button>
  );
}

export default SignInButton;
