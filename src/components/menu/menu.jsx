import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <button
        title="back"
        onClick={(event) => {
          navigate(-1);
        }}
      >
        back
      </button>
      <button
        title="mypage"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        mypage
      </button>
      <button
        title="signin"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        signin
      </button>
      <button
        title="signup"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        signup
      </button>
      <button
        title="shop"
        onClick={(event) => {
          const loc = event.target.title;
          navigate(`/${loc}/${loc}`);
        }}
      >
        shop
      </button>
    </div>
  );
};

export default Menu;
