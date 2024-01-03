import React from "react";
import { useState } from "react";
import "../CSS/SigninForm.css";

const SignupForm = ({ handleClick }) => {
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
          style={{ marginBottom: "24px" }}
          type="password"
          id="password"
          placeholder="*****************"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="flex font size">
        <label htmlFor="password" style={{ marginBottom: "4px" }}>
          Confirm Password:
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

      <button className="submit-button">Register</button>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <span className="footer1">Already have an account?</span>
        <span onClick={handleClick} className="footer2">
          Log in
        </span>
      </div>
    </form>
  );
};

export default SignupForm;
