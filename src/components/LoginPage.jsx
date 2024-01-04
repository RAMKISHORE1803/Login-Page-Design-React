import React from "react";
import "../CSS/LoginPage.css";
import LeftHero from "./LeftHero";
import Register from "./Register";

const LoginPage = () => {
  return (
    <div
      id="container"
      style={{ maxWidth: "100vw", maxHeight: "100vh", overflow: "hidden" }}
    >
      <div id="left">
        <LeftHero />
      </div>
      <div id="right">
        <Register />
      </div>
    </div>
  );
};

export default LoginPage;
