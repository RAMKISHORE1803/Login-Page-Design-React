import React from "react";
import "../CSS/LoginPage.css";
import LeftHero from "./lefthero";
import Register from "./Register";

const LoginPage = () => {
  return (
    <div id="container">
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
