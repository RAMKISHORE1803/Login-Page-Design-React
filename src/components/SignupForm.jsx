import React, { useState } from "react";
import "../CSS/SigninForm.css";

const SignupForm = ({ handleClick }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

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
      <div style={{ display: "flex" }}>
        <div className="font size">
          <label htmlFor="firstname" style={{ marginBottom: "4px" }}>
            First Name:
          </label>
          <input
            className="input"
            style={{ marginBottom: "24px", width: "200px" }}
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="font size">
          <label htmlFor="lastname" style={{ marginBottom: "4px" }}>
            Last Name:
          </label>
          <input
            className="input"
            style={{ marginBottom: "24px", width: "200px" }}
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
      </div>

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
