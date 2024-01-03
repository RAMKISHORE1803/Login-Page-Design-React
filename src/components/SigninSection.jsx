import React, { useState } from "react";
import Text from "./Text";
import google from "../assets/google.png";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const SigninSection = () => {
  const [signin, setSignin] = useState(true);
  const handleClick = () => {
    setSignin(!signin);
  };

  return (
    <div style={{ width: "420px", height: "505px" }}>
      <Text
        text1={signin ? "Login to your account" : "Create a new account"}
        text2={
          signin
            ? "See what is going on with your business"
            : "Explore a world of opportunities"
        }
        image={google}
      />
      <div
        style={{
          width: "420px",
          height: "88px",
          padding: "36px 0 36px 0",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ height: "16px" }} id="text4">
          ------------- or Sign in with Email-------------{" "}
        </div>
      </div>

      {signin ? (
        <SigninForm handleClick={handleClick} />
      ) : (
        <SignupForm handleClick={handleClick} />
      )}
    </div>
  );
};

export default SigninSection;
