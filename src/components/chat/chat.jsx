import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Menu from "../menu/menu";
import styles from "./chat.module.css";

const Chat = (props) => {
  return (
    <section className={styles.chat}>
      <Header />
      <Menu />
      chat
      <Footer />
    </section>
  );
};

export default Chat;
