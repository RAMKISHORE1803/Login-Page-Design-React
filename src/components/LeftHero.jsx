import React from "react";
import heroimage from "../assets/hero.jpg";

const LeftHero = () => {
  return (
    <div>
      <img src={heroimage} style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
};

export default LeftHero;
