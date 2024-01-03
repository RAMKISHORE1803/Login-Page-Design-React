import React from "react";
import { useState } from "react";
import "../CSS/SigninForm.css";
import check from "../assets/check.svg";

const SigninForm = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      style={{
        height: "266px",
        width: "420px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div className="flex font size">
        <label htmlFor="email" style={{ marginBottom: "4px" }}>
          Email:
        </label>
        <input
          className="input"
          style={{ marginBottom: "24px" }}
          type="email"
          id="email"
          placeholder="mail@abc.com"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="flex font size">
        <label htmlFor="password" style={{ marginBottom: "4px" }}>
          Password:
        </label>
        <input
          className="input"
          style={{ marginBottom: "8px" }}
          type="password"
          id="password"
          placeholder="*****************"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "420px",
          height: "16px",
          boxSizing: "border-box",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "auto",
            display: "flex",
            boxSizing: "border-box",
            gap: "8px",
          }}
        >
          <img
            style={{
              background: "#7F265B",
              width: "15px",
              height: "15px",
              cursor: "pointer",
            }}
            src={check}
          />
          <div style={{ fontSize: "12px", fontWeight: "400" }} className="font">
            Remember me
          </div>
        </div>

        <div
          className="font"
          style={{
            color: "#7F265B",
            fontSize: "12px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          Forgot Password?
        </div>
      </div>

      <button className="submit-button">Login</button>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <span className="footer1">Not Registered Yet?</span>
        <span onClick={handleClick} className="footer2">
          Create an account
        </span>
      </div>
    </form>
  );
};

export default SigninForm;
