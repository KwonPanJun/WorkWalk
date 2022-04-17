import React from "react";
import styles from "./header.module.css";
import Menu from "../menu/menu";

const Header = (props) => {
  return (
    <header>
      <a href="/" className={styles.logo}>
        <img src="/images/WolkWalk-logo.png"></img>
      </a>
      <Menu />
    </header>
  );
};

export default Header;
