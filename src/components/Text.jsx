import React from "react";
import "../CSS/LoginPage.css";

const Text = ({ image, text1, text2 }) => {
  return (
    <div
      style={{
        width: "420px",
        height: "151px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "420px", height: "74px" }}>
        <div id="text1">{text1}</div>
        <div id="text2">{text2}</div>
      </div>

      <div
        style={{
          width: "420px",
          height: "45px",
          padding: "10px",
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "center",
          border: "1px #E8E8E8 solid",
          borderRadius: "5px",
          gap: "13px",
          cursor: "pointer",
        }}
      >
        <img src={image} style={{ width: "25px", height: "25px" }} />
        <div id="text3">Continue with google</div>
      </div>
    </div>
  );
};

export default Text;
