import React from "react";
import styles from "./header.module.css";
import Menu from "../menu/menu";

const Header = (props) => {
  return (
    <header className={styles.title}>
      <h5>반려견 산책 도우미 매칭 서비스</h5>
      <h1>Work Walk</h1>
    </header>
  );
};

export default Header;
