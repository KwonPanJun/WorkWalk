import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";

const Menu = (props) => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home/home");
  };

  const toSignin = () => {
    navigate("/signin/signin");
  };
  const toSignup = () => {
    navigate("/signup/signup");
  };

  const toWelcome = () => {
    navigate("/welcome/welcome");
  };

  const toBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button name="Home" onClick={toHome} />
      <Button name="Signin" onClick={toSignin} />
      <Button name="Signup" onClick={toSignup} />
      <Button name="Welcome" onClick={toWelcome} />
      <Button name="Back" onClick={toBack} />
    </>
  );
};

export default Menu;
