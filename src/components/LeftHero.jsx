import React from "react";
import heroimage from "../assets/hero.jpg";

const LeftHero = () => {
  return (
    <div>
      <img src={heroimage} style={{ maxWidth: "50vw", height: "100vh" }} />
    </div>
  );
};

export default LeftHero;
