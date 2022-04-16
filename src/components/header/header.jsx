import React from "react";
import styles from "./header.module.css";
import Menu from "../menu/menu";

const Header = (props) => {
  return (
    <header className={styles.title}>
      <div className={styles.inner} >
       
       <a href="/" className={styles.logo}>
       <img src="/images/WolkWalk-logo.png"></img>
       </a>

      <div className={styles.menu}>
       <Menu />
      </div>
 
      </div>
      
    </header>
  );
};

export default Header;
