import React from "react";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <img
      src={logo}
      style={{ width: "72px", height: "72px", paddingBottom: "36px" }}
      alt="Logo"
    />
  );
};

export default Logo;
