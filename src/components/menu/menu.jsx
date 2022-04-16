import React from "react";
import { useNavigate } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./menu.module.css";

const Menu = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <div className={styles.inner}>
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
        class="btn btn-success"
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
    </div>
  );
};

export default Menu;
